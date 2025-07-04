const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration for different image types
const imageConfig = {
  hero: { width: 1920, quality: 85 },
  services: { width: 800, quality: 85 },
  products: { width: 800, quality: 90 },
  avatars: { width: 200, quality: 85 },
  about: { width: 1200, quality: 85 },
  default: { width: 1200, quality: 85 }
};

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const metadata = await sharp(inputPath).metadata();
    
    // Skip if image is already smaller than target width
    if (metadata.width <= config.width) {
      await sharp(inputPath)
        .jpeg({ 
          quality: config.quality,
          progressive: true,
          mozjpeg: true
        })
        .toFile(outputPath);
    } else {
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: config.quality,
          progressive: true,
          mozjpeg: true
        })
        .toFile(outputPath);
    }
    
    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)}: ${formatBytes(inputStats.size)} → ${formatBytes(outputStats.size)} (${reduction}% reduction)`);
    
    return { input: inputStats.size, output: outputStats.size };
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

async function optimizeAllImages() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const optimizedDir = path.join(__dirname, '..', 'public', 'images-optimized');
  
  // Create optimized directory
  await fs.mkdir(optimizedDir, { recursive: true });
  
  let totalInput = 0;
  let totalOutput = 0;
  let fileCount = 0;
  
  // Process each subdirectory
  const subdirs = await fs.readdir(imagesDir);
  
  for (const subdir of subdirs) {
    const subdirPath = path.join(imagesDir, subdir);
    const stats = await fs.stat(subdirPath);
    
    if (stats.isDirectory()) {
      const optimizedSubdir = path.join(optimizedDir, subdir);
      await fs.mkdir(optimizedSubdir, { recursive: true });
      
      const files = await fs.readdir(subdirPath);
      const config = imageConfig[subdir] || imageConfig.default;
      
      console.log(`\nOptimizing ${subdir} images (max width: ${config.width}px, quality: ${config.quality}%):`);
      
      for (const file of files) {
        if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
          const inputPath = path.join(subdirPath, file);
          const outputPath = path.join(optimizedSubdir, file);
          
          const result = await optimizeImage(inputPath, outputPath, config);
          if (result) {
            totalInput += result.input;
            totalOutput += result.output;
            fileCount++;
          }
        }
      }
    } else if (subdir.toLowerCase().endsWith('.jpg') || subdir.toLowerCase().endsWith('.jpeg')) {
      // Handle files in root images directory
      const inputPath = path.join(imagesDir, subdir);
      const outputPath = path.join(optimizedDir, subdir);
      const config = imageConfig.default;
      
      const result = await optimizeImage(inputPath, outputPath, config);
      if (result) {
        totalInput += result.input;
        totalOutput += result.output;
        fileCount++;
      }
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`Total: ${fileCount} images optimized`);
  console.log(`Size reduction: ${formatBytes(totalInput)} → ${formatBytes(totalOutput)}`);
  console.log(`Total saved: ${formatBytes(totalInput - totalOutput)} (${((1 - totalOutput / totalInput) * 100).toFixed(1)}% reduction)`);
  console.log('='.repeat(50));
  
  console.log('\nOptimized images saved to: public/images-optimized/');
  console.log('\nTo use the optimized images:');
  console.log('1. Review the optimized images for quality');
  console.log('2. Backup your original images: mv public/images public/images-original');
  console.log('3. Use optimized images: mv public/images-optimized public/images');
}

// Run the optimization
optimizeAllImages().catch(console.error);