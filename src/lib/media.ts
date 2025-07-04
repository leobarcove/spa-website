// Royalty-free media sources for spa website
// All sources are either Creative Commons, Public Domain, or royalty-free

export const mediaAssets = {
  videos: {
    // Local spa hero videos (royalty-free)
    heroBackground: "/videos/spa-hero-ambient.mp4",
    relaxation: "/videos/spa-hero-ambient.mp4",
    
    // Fallback external sources
    fallbackHero: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  
  audio: {
    // Local spa ambient audio (royalty-free)
    spaAmbient: "/audio/spa-ambient-sample.mp3",
    
    // Fallback external sources
    fallbackAmbient: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3",
  },
  
  images: {
    // Hero images
    heroPoster: "/images/hero/hero-main.jpg",
    heroBackground: "/images/hero/hero-main.jpg",
    spaRoom: "/images/hero/spa-room.jpg",
    
    // About
    spaInterior: "/images/about/spa-interior.jpg",
    
    // Services
    services: {
      aromatherapy: "/images/services/aromatherapy.jpg",
      couplesMassage: "/images/services/couples-massage.jpg",
      deepTissue: "/images/services/deep-tissue.jpg",
      hotStone: "/images/services/hot-stone.jpg",
      royalRitual: "/images/services/royal-ritual.jpg",
      traditionalMassage: "/images/services/traditional-massage.jpg",
    },
    
    // Products
    products: {
      castorOil: "/images/products/castor-massage-oil.jpg",
      coconutOil: "/images/products/coconut-body-oil.jpg",
      eucalyptusBlend: "/images/products/eucalyptus-blend.jpg",
      lavenderOil: "/images/products/lavender-aroma-oil.jpg",
      lemongrassOil: "/images/products/lemongrass-massage-oil.jpg",
      ylangYlang: "/images/products/ylang-ylang-romance-blend.jpg",
    },
    
    // Team avatars
    avatars: {
      ahmadRahman: "/images/avatars/ahmad-rahman.jpg",
      davidWong: "/images/avatars/david-wong.jpg",
      jamesLee: "/images/avatars/james-lee.jpg",
      lisaWong: "/images/avatars/lisa-wong.jpg",
      michelleTan: "/images/avatars/michelle-tan.jpg",
      priyaSharma: "/images/avatars/priya-sharma.jpg",
      sarahChen: "/images/avatars/sarah-chen.jpg",
      sarahLim: "/images/avatars/sarah-lim.jpg",
    },
    
    // Payment
    qrCode: "/images/tngo_qrcode.jpg",
  }
}

// Media configuration
export const mediaConfig = {
  video: {
    autoPlay: true,
    loop: true,
    muted: true,
    preload: 'metadata' as const,
    playsinline: true,
  },
  
  audio: {
    autoPlay: false, // Requires user interaction
    loop: true,
    volume: 0.2,
    preload: 'metadata' as const,
  }
}

// Check if media source is available
export const checkMediaAvailability = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

// Get best available media source
export const getBestMediaSource = async (sources: string[]): Promise<string> => {
  for (const source of sources) {
    const isAvailable = await checkMediaAvailability(source)
    if (isAvailable) {
      return source
    }
  }
  return sources[sources.length - 1] // Return last as fallback
}