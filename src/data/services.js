// Add, edit or remove a service here; routes, menus and cards update automatically.
// App Development is client-confirmed. The rest are proposals.
export const services = [
{
    slug: 'app-development',
    title: 'App Development',
    summary: 'Native and cross-platform mobile apps built for daily use.',
    problems: ['Slow, unreliable apps that people uninstall', 'No clear path from idea to store release'],
    capabilities: ['Android Apps', 'IOS Apps', 'Game Apps'],
    technologies: ['React Native', 'Flutter'],
  },
{
    slug: 'web-development',
    title: 'Web Development',
    summary: 'Fast, accessible websites and web apps that are easy to maintain.',
    problems: ['Slow pages that lose visitors', 'Sites that are hard for your team to update'],
    capabilities: ['Marketing sites', 'Web applications', 'Performance and SEO'],
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
  },
{
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    summary: 'Research-led interface design, from first sketch to design system.',
    problems: ['Products that confuse new users', 'Inconsistent design across screens'],
    capabilities: ['User research', 'Prototypes and testing', 'Design systems'],
    technologies: ['Figma', 'Storybook'],
  },
{
  slug: 'e-commerce-website',
  title: 'E-commerce Website',
  summary: 'Powerful online stores built to deliver seamless shopping experiences and drive business growth.',
  problems: [
    'Poor shopping experiences that drive customers away',
    'Slow websites that impact sales and conversions',
    'Difficult product and inventory management',
  ],
  capabilities: [
    'Custom e-commerce development',
    'Shopify store development',
    'WordPress & WooCommerce development',
    'Payment gateway integration',
    'Product and inventory management',
    'Performance optimization',
  ],
  technologies: [
    'React.js',
    'Next.js',
    'Shopify',
    'WordPress',
    'WooCommerce',
    'Node.js',
  ],
},
{
  slug: 'stationery-design',
  title: 'Stationery Design',
  summary: 'Beautifully crafted business stationery that brings your brand identity to life.',
  problems: [
    'Inconsistent branding across business materials',
    'Generic designs that fail to make a lasting impression',
    'Unprofessional stationery that weakens brand credibility',
  ],
  capabilities: [
    'Business card design',
    'Letterhead design',
    'Envelope design',
    'Invoice and document templates',
    'Branded folders and notepads',
    'Print-ready design files',
  ],
  technologies: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Adobe InDesign',
    'Figma',
  ],
},
{
  slug: 'trademark-registration',
  title: 'Trademark Registration',
  summary: 'Protect your brand identity with professional trademark registration and intellectual property support.',
  problems: [
    'Risk of others using your brand name or logo',
    'Confusion around trademark laws and registration requirements',
    'Complex application processes and documentation',
  ],
  capabilities: [
    'Trademark availability searches',
    'Trademark application preparation',
    'Brand name and logo registration assistance',
    'Application documentation support',
    'Registration status tracking',
    'Trademark renewal assistance',
  ],
  technologies: [
    'Trademark Search',
    'IP Documentation',
    'Application Management',
    'Registration Tracking',
  ],
},
]

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug)
