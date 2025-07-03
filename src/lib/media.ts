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
    // Unsplash images (royalty-free for commercial use)
    heroPoster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    spaRoom: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    treatment: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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