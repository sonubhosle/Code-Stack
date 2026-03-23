import { 
  Home, 
  GraduationCap, 
  Cpu, 
  FolderGit2, 
  User, 
  Wrench,
  Terminal,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Layout,MonitorSmartphone,
  Server
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/', icon: <Home size={20} /> },
  { name: 'Education', href: '#education', icon: <GraduationCap size={20} /> },
  { name: 'Skills', href: '#skills', icon: <Cpu size={20} /> },
  { name: 'Services', href: '#services', icon: <Wrench size={20} /> },
  { name: 'Projects', href: '#projects', icon: <FolderGit2 size={20} /> },
  { name: 'About Us', href: '#about', icon: <User size={20} /> },
];

export const BRAND_INFO = {
  name: "Code Stack",
  slogan: "Web Developer",
  logo: <Terminal size={32} className="text-white" />
};

export const CONTACT_INFO = {
  email: "sbhosle1011@gmail.com",
  phone: "8080987767"
};

export const SOCIAL_LINKS = [
  { platform: 'Twitter', icon: <Twitter size={20} />, href: '#' },
  { platform: 'GitHub', icon: <Github size={20} />, href: '#' },
  { platform: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
  { platform: 'Facebook', icon: <Facebook size={20} />, href: '#' },
];



export const SERVICES_DATA = [
  {
    id: 'basic-website',
    value: 'basic_website',
    title: 'Basic Website',
    subtitle: 'Static & Informational',
    description: 'A clean, professional 5-page website perfect for personal portfolios, landing pages, and small businesses needing an online presence.',
    icon: <Layout size={32} />,
    priceOneTime: '₹500',
    priceMonthly: '₹49',
    features: [
      { name: 'Responsive Design', highlight: true },
      { name: 'High Performance', highlight: true },
      { name: 'Basic SEO Setup', highlight: true },
      { name: 'Social Media Links', highlight: true },
      { name: 'Contact Form', highlight: false },
      { name: 'Sequrity', highlight: false },
    ],
    recommended: false,
  },
  {
    id: 'advanced-website',
    value: 'advanced_website',
    title: 'Advanced Website',
    subtitle: 'Dynamic & CMS Ready',
    description: 'A robust, dynamic website with a Content Management System (CMS) allowing you to update blogs, images, and text easily.',
    icon: <MonitorSmartphone size={32} />,
    priceOneTime: '₹1,200',
    priceMonthly: '₹99',
        features: [
      { name: 'React / Next.js', highlight: true },
      { name: 'Database (SQL/NoSQL)', highlight: true },
      { name: 'User Authentication', highlight: true },
      { name: 'API Development', highlight: true },
      { name: 'Admin Dashboard', highlight: true },
      { name: 'Payment Gateway', highlight: true },
      { name: 'Hosting & Domain', highlight: true },
    ],

    recommended: true,
  },
  {
    id: 'professional-website',
    value: 'professional_website',
    title: 'Professional Website',
    subtitle: 'Custom Web Application',
    description: 'Full-scale custom development for complex needs. Includes databases, user authentication, e-commerce, or custom business logic.',
    icon: <Server size={32} />,
    priceOneTime: 'Custom',
    priceMonthly: 'Custom',
         features: [
      { name: 'CMS Integration', highlight: true },
      { name: 'Dynamic Content', highlight: true },
      { name: 'Advanced SEO', highlight: true },
      { name: 'Newsletter Signup', highlight: true },
      { name: 'Contact Form', highlight: true },
      { name: 'Interactive UI', highlight: false },
      { name: 'Analytics Dashboard', highlight: false },

    ],
    recommended: false,
  }
];