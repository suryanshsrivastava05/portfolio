export interface Project {
  title: string;
  category: string;
  description: string;
  client: string;
  date: string;
  services: string[];
  heroImage: string;
  images?: string[];
  videos?: string[];
}

export const projectsData: Record<string, Project> = {
  'coding-pro': {
    title: 'Coding Pro — App Store Creatives',
    category: 'App Design',
    description: 'Designed comprehensive App Store listing creatives and marketing materials for Coding Pro, an education app with 88K+ ratings. The goal was to highlight key features like the in-app compiler and 1-on-1 mentorship to drive conversions.',
    client: 'Code4Bots Technologies',
    date: '2024',
    services: ['App Store Optimization', 'UI/UX Design', 'Marketing Material'],
    heroImage: '/projects/coding-pro.jpg',
    images: [
      '/projects/app/App Coding Pro 1.jpg',
      '/projects/app/Assignement 3.png',
    ]
  },
  'clue-dicode': {
    title: 'Clue.dicode — OSINT Puzzle Game',
    category: 'App Design',
    description: 'Developed the brand identity and 3D mockup presentations for Clue.dicode, an OSINT-based puzzle game available on the Google Play Store. The design focuses on a mysterious, hacker-centric dark theme.',
    client: 'KrAnsh',
    date: '2024',
    services: ['Brand Identity', '3D Mockup', 'App Presentation'],
    heroImage: '/projects/clue-dicode.jpg',
    images: [
      '/projects/app/Clue-dicode.jpg',
      '/projects/app/asbvduik.jpg',
    ]
  },
  'club17': {
    title: 'Club 17 & Forest Club',
    category: 'Social Media',
    description: 'A complete social media design system for a premium nightclub brand. This project involved creating event flyers, special guest DJ promos, and dynamic reel covers to maintain a vibrant online presence.',
    client: 'Club 17 / Forest Club',
    date: '2023 - 2024',
    services: ['Social Media Design', 'Event Branding', 'Typography'],
    heroImage: '/projects/club17-bollywood.png',
    images: [
      '/projects/club17/Bollywood night.png',
      '/projects/club17/Dj Ana.jpg',
      '/projects/club17/15 aug.jpg',
      '/projects/club17/DAY 1 CLB 17.jpg',
      '/projects/club17/Ig post.jpg',
      '/projects/club17/Independence day.png',
      '/projects/club17/music party.jpg',
    ]
  },
  'carousel-designs': {
    title: 'Carousel Post Designs',
    category: 'Graphic Design',
    description: 'Engaging, multi-slide carousel designs created for Instagram marketing campaigns. Focused on storytelling, seamless transitions between slides, and high-conversion typography.',
    client: 'Various Clients',
    date: '2024',
    services: ['Carousel Design', 'Content Creation', 'Social Media Strategy'],
    heroImage: '/projects/carousel-post.jpg',
    images: [
      '/projects/carousel/Final-Post_01.jpg',
      '/projects/carousel/Final-Post_02.jpg',
      '/projects/carousel/weqwe_01.jpg',
      '/projects/carousel/weqwe_02.jpg',
      '/projects/carousel/uuuugugug23_01.jpg',
      '/projects/carousel/uuuugugug23_02.jpg',
      '/projects/carousel/Carousel-Template-1212_01.jpg',
      '/projects/carousel/Carousel-Template-1212_02.jpg',
    ]
  },
  'club17-events': {
    title: 'Club 17 — Event Promos',
    category: 'Graphic Design',
    description: 'High-energy event promotion designs for weekend parties, DJ nights, and special performances at Club 17.',
    client: 'Club 17',
    date: '2024',
    services: ['Poster Design', 'Nightlife Branding'],
    heroImage: '/projects/club17-dj.jpg',
    images: [
      '/projects/club17/Dj Ana.jpg',
      '/projects/club17/Sat post.jpg',
      '/projects/club17/Sunday_post.jpg',
      '/projects/club17/weekend_post(1).jpg',
      '/projects/club17/weekend_post(2).jpg',
    ]
  },
  'food-design': {
    title: 'Food & Menu Design',
    category: 'Graphic Design',
    description: 'Appetizing food photography posts, social media flyers, and digital menu cards emphasizing premium culinary offerings.',
    client: 'Forest Club / Maaista',
    date: '2024',
    services: ['Food Photography Editing', 'Menu Layout', 'Social Media'],
    heroImage: '/projects/club17-food.jpg',
    images: [
      '/projects/club17/Chicken-Tikka.jpg',
      '/projects/club17/Fried_chk.jpg',
      '/projects/club17/Naachos.jpg',
      '/projects/club17/Pan_Fried_Dumplings.jpg',
      '/projects/club17/Falafel Pita Bread and Hummus.png',
      '/projects/club17/Food Menu Burger Restaurant Social Media Post PSD.jpg',
    ]
  },
  'video-production': {
    title: 'Video Production & Motion',
    category: 'Video',
    description: 'A showcase of video production capabilities including AI-powered videos, cinematic logo animations, short-form reels, and event teasers.',
    client: 'Multiple Brands',
    date: '2023 - 2024',
    services: ['Video Editing', 'Motion Graphics', 'AI Video Generation'],
    heroImage: '/projects/club17-ig.jpg',
    videos: [
      '/projects/videos/CTF TEASER.mp4',
      '/projects/videos/Final_ver(Amazon).mp4',
      '/projects/videos/Kushinara  Cinematic Productions.mp4',
      '/projects/videos/Short form(reel-1).mp4',
    ],
    images: []
  },
  'app-uiux': {
    title: 'App UI/UX Design',
    category: 'App Design',
    description: 'Interface design explorations focusing on dark mode aesthetics, clean typography, and intuitive user experiences for mobile platforms.',
    client: 'Personal Projects',
    date: '2024',
    services: ['User Interface', 'Prototyping', 'User Experience'],
    heroImage: '/projects/app-design.jpg',
    images: [
      '/projects/app/asbvduik.jpg',
      '/projects/app/Assignement 3.png',
    ]
  }
};
