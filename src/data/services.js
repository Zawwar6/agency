
export const services = [
  {
    slug: 'app-development',
    title: 'App Development',
    summary: 'Native and cross-platform mobile apps built for daily use.',
    problems: [
      'Slow, unreliable apps that people uninstall',
      'No clear path from idea to store release',
    ],
    capabilities: ['Android Apps', 'iOS Apps', 'Game Apps'],
    technologies: ['React Native', 'Flutter'],

    pricing: {
      currency: 'USD',
      pricingType: 'Project Based',
      packages: [
        {
          name: 'Starter',
          price: 1200,
          description: 'A simple mobile app to bring your idea to life.',
          features: [
            'Up to 5 screens',
            'Cross-platform development',
            'Responsive UI',
            'Basic API integration',
            'Basic testing',
          ],
        },
        {
          name: 'Professional',
          price: 3000,
          description: 'A feature-rich app for growing businesses.',
          popular: true,
          features: [
            'Up to 15 screens',
            'Custom UI/UX design',
            'User authentication',
            'API and database integration',
            'Push notifications',
            'Advanced testing',
          ],
        },
        {
          name: 'Advanced',
          price: 6000,
          description: 'A scalable application with advanced functionality.',
          features: [
            'Custom application architecture',
            'Advanced features and integrations',
            'Admin dashboard',
            'Payment integration',
            'Push notifications',
            'Performance optimization',
            'Deployment assistance',
          ],
        },
      ],
    },
  },

  {
    slug: 'web-development',
    title: 'Web Development',
    summary: 'Fast, accessible websites and web apps that are easy to maintain.',
    problems: [
      'Slow pages that lose visitors',
      'Sites that are hard for your team to update',
    ],
    capabilities: [
      'Marketing sites',
      'Web applications',
      'Performance and SEO',
    ],
    technologies: ['React', 'Node.js', 'Tailwind CSS'],

    pricing: {
      currency: 'USD',
      pricingType: 'Project Based',
      packages: [
        {
          name: 'Starter',
          price: 499,
          description: 'A professional online presence for small businesses.',
          features: [
            'Up to 5 pages',
            'Responsive design',
            'Modern UI',
            'Contact form',
            'Basic SEO setup',
            'Social media integration',
          ],
        },
        {
          name: 'Professional',
          price: 1199,
          description: 'A complete website designed for business growth.',
          popular: true,
          features: [
            'Up to 10 pages',
            'Custom UI/UX design',
            'CMS integration',
            'Advanced SEO setup',
            'Contact forms',
            'Performance optimization',
            'Analytics integration',
          ],
        },
        {
          name: 'Advanced',
          price: 2499,
          description: 'A powerful custom web solution for growing companies.',
          features: [
            'Custom web application',
            'Advanced functionality',
            'Backend and database integration',
            'User authentication',
            'Admin dashboard',
            'Third-party API integration',
            'Security optimization',
          ],
        },
      ],
    },
  },

  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    summary: 'Research-led interface design, from first sketch to design system.',
    problems: [
      'Products that confuse new users',
      'Inconsistent design across screens',
    ],
    capabilities: [
      'User research',
      'Prototypes and testing',
      'Design systems',
    ],
    technologies: ['Figma', 'Storybook'],

    pricing: {
      currency: 'USD',
      pricingType: 'Project Based',
      packages: [
        {
          name: 'Starter',
          price: 299,
          description: 'Clean and intuitive designs for simple projects.',
          features: [
            'Up to 5 screens',
            'Basic wireframes',
            'Modern UI design',
            'Mobile and desktop layouts',
            'Figma source file',
          ],
        },
        {
          name: 'Professional',
          price: 699,
          description: 'A complete user experience for growing products.',
          popular: true,
          features: [
            'Up to 12 screens',
            'UX research',
            'User flows',
            'Interactive prototypes',
            'Responsive UI design',
            'Reusable components',
            'Figma source file',
          ],
        },
        {
          name: 'Advanced',
          price: 1499,
          description: 'A complete design system for complex digital products.',
          features: [
            'Up to 25 screens',
            'Detailed UX research',
            'Advanced prototyping',
            'Complete design system',
            'Component library',
            'Developer handoff',
            'Design documentation',
          ],
        },
      ],
    },
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

    pricing: {
      currency: 'USD',
      pricingType: 'Project Based',
      packages: [
        {
          name: 'Starter',
          price: 699,
          description: 'Get your products online with a professional store.',
          features: [
            'Shopify or WooCommerce setup',
            'Up to 20 products',
            'Responsive store design',
            'Essential store pages',
            'Payment gateway setup',
            'Basic SEO',
          ],
        },
        {
          name: 'Professional',
          price: 1499,
          description: 'A complete online store built to grow your sales.',
          popular: true,
          features: [
            'Custom store design',
            'Up to 100 products',
            'Advanced product filtering',
            'Payment integration',
            'Shipping configuration',
            'Inventory management',
            'SEO optimization',
            'Performance optimization',
          ],
        },
        {
          name: 'Advanced',
          price: 2999,
          description: 'A tailored e-commerce solution for scaling businesses.',
          features: [
            'Custom e-commerce development',
            'Advanced store functionality',
            'Custom integrations',
            'Advanced inventory management',
            'Custom checkout features',
            'Analytics integration',
            'Performance optimization',
            'Admin management tools',
          ],
        },
      ],
    },
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

    pricing: {
      currency: 'USD',
      pricingType: 'Design Package',
      packages: [
        {
          name: 'Starter',
          price: 99,
          description: 'Essential stationery for a professional business identity.',
          features: [
            'Business card design',
            'Letterhead design',
            '2 initial concepts',
            '2 revision rounds',
            'Print-ready PDF files',
          ],
        },
        {
          name: 'Professional',
          price: 199,
          description: 'A consistent stationery identity across business materials.',
          popular: true,
          features: [
            'Business card design',
            'Letterhead design',
            'Envelope design',
            'Invoice template',
            '3 initial concepts',
            '3 revision rounds',
            'Print-ready files',
          ],
        },
        {
          name: 'Complete',
          price: 349,
          description: 'A complete branded stationery collection.',
          features: [
            'Business card design',
            'Letterhead design',
            'Envelope design',
            'Invoice and document templates',
            'Branded folder design',
            'Notepad design',
            'Editable source files',
            'Print-ready files',
          ],
        },
      ],
    },
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

    pricing: {
      currency: 'USD',
      pricingType: 'Custom Quote',
      packages: [
        {
          name: 'Basic Search',
          price: 99,
          description: 'Initial trademark research and availability review.',
          features: [
            'Initial trademark search',
            'Brand name review',
            'Basic search report',
            'Documentation guidance',
          ],
        },
        {
          name: 'Application Support',
          price: 299,
          description: 'Assistance with preparing your trademark application.',
          popular: true,
          features: [
            'Trademark availability search',
            'Application preparation',
            'Documentation assistance',
            'Filing guidance',
            'Application tracking guidance',
          ],
        },
        {
          name: 'Complete Support',
          price: 599,
          description: 'Extended assistance throughout the registration process.',
          features: [
            'Detailed trademark search',
            'Application preparation',
            'Documentation support',
            'Filing assistance',
            'Status tracking support',
            'Renewal guidance',
          ],
        },
      ],
    },
  },
];

export const getServiceBySlug = (slug) =>
services.find((service) => service.slug === slug);
