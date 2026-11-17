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
    summary: 'Custom business software designed to scale with your team.',
    problems: ['Manual processes that slow your team down', 'Tools that don’t talk to each other'],
    capabilities: ['Internal tools', 'System integrations', 'Cloud architecture'],
    technologies: ['Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'stationary-design',
    title: 'Stationary Design',
    summary: 'Custom business software designed to scale with your team.',
    problems: ['Manual processes that slow your team down', 'Tools that don’t talk to each other'],
    capabilities: ['Internal tools', 'System integrations', 'Cloud architecture'],
    technologies: ['Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'trademark-registeration',
    title: 'Trademark Registeration',
    summary: 'Custom business software designed to scale with your team.',
    problems: ['Manual processes that slow your team down', 'Tools that don’t talk to each other'],
    capabilities: ['Internal tools', 'System integrations', 'Cloud architecture'],
    technologies: ['Node.js', 'PostgreSQL', 'AWS'],
  },
]

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug)
