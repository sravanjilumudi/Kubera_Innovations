export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: 'pcb-design-best-practices-2024',
    title: 'PCB Design Best Practices for High-Speed Applications',
    excerpt: 'Learn the essential techniques for designing PCBs that handle high-speed signals with minimal interference and optimal signal integrity.',
    category: 'PCB Design',
    date: '2024-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'fpga-vs-asic',
    title: 'FPGA vs ASIC: Making the Right Choice for Your Project',
    excerpt: 'A comprehensive comparison of FPGA and ASIC solutions to help you decide which technology best fits your product requirements.',
    category: 'Hardware',
    date: '2024-01-10',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 'iot-security-fundamentals',
    title: 'IoT Security Fundamentals Every Engineer Should Know',
    excerpt: 'Explore the critical security considerations when designing IoT devices, from secure boot to encrypted communications.',
    category: 'IoT',
    date: '2024-01-05',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 'signal-integrity-analysis',
    title: 'Signal Integrity Analysis: Tools and Techniques',
    excerpt: 'Deep dive into signal integrity analysis methods and the tools that help ensure your designs meet performance requirements.',
    category: 'Signal Integrity',
    date: '2023-12-28',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 'embedded-rtos-selection',
    title: 'Choosing the Right RTOS for Embedded Systems',
    excerpt: 'Compare popular real-time operating systems and learn how to select the best one for your embedded application.',
    category: 'Embedded',
    date: '2023-12-20',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'power-integrity-basics',
    title: 'Power Integrity: Designing Robust Power Distribution Networks',
    excerpt: 'Master the fundamentals of power integrity and learn how to design PDNs that ensure stable power delivery to your ICs.',
    category: 'Power',
    date: '2023-12-15',
    readTime: '8 min read',
    featured: false,
  },
]

export const categories = ['All', 'PCB Design', 'Hardware', 'IoT', 'Embedded', 'Signal Integrity', 'Power']

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getRelatedPosts(currentId: string, category: string, limit: number = 2): BlogPost[] {
  return blogPosts
    .filter((post) => post.id !== currentId && post.category === category)
    .slice(0, limit)
}
