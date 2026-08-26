export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  type: 'Personal Project' | 'Open Source' | 'Confidential Project' | 'Professional Tool';
  typeLabel?: string;
  description: string;
  stack: string[];
  status: string;
  confidential?: boolean;
  featured?: boolean;
  links?: ProjectLink[];
};

export type AdditionalWork = {
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: 'shibusenro',
    title: 'ShibusenRO',
    type: 'Personal Project',
    description:
      'End-to-end online game platform integrating Laravel, rAthena, shared identity, payments, a transactional web shop, custom client tooling and cloud infrastructure.',
    stack: ['Laravel', 'Docker', 'MariaDB', 'C#', 'Oracle Cloud', 'Cloudflare'],
    status: 'Flagship Case Study',
    featured: true,
    links: [
      { label: 'Community', url: 'https://shibusen.online' },
      { label: 'RO Platform', url: 'https://ro.shibusen.online' },
    ],
  },
  {
    slug: 'audiodrop',
    title: 'AudioDrop',
    type: 'Open Source',
    description:
      'Music software spanning a production-ready Windows desktop app and an Android project in active development, with playback, library management and media tooling.',
    stack: ['Python', 'PyQt6', 'Kotlin', 'Jetpack Compose', 'Media3', 'FFmpeg'],
    status: 'Open Source',
    featured: true,
    links: [
      { label: 'Desktop GitHub', url: 'https://github.com/IgnacioVerde/audiodrop-desktop' },
      { label: 'Android GitHub', url: 'https://github.com/IgnacioVerde/audiodrop-android' },
    ],
  },
  {
    slug: 'redgesta',
    title: 'RedGesta',
    type: 'Confidential Project',
    description:
      'Modern Laravel education platform built around a legacy third-party API, balancing local persistence with real-time external data and production operations.',
    stack: ['Laravel', 'Docker', 'MySQL', 'API Integration', 'Linux'],
    status: 'Case Study Only',
    confidential: true,
    featured: true,
  },
  {
    slug: 'library-modernization',
    title: 'Legacy Library Modernization',
    type: 'Confidential Project',
    description:
      'Recovery and migration of a 20,000+ item bibliographic catalog from discontinued software, followed by automated media processing and modern digital access.',
    stack: ['Python', 'Omeka', 'ETL', 'Legacy Systems', 'Automation'],
    status: 'Case Study Only',
    confidential: true,
    featured: true,
  },
  {
    slug: 'academic-automation',
    title: 'Academic Data Automation',
    type: 'Confidential Project',
    description:
      'Internal automation for extracting, normalizing and consolidating academic information from a closed legacy web system without API or database access.',
    stack: ['Python', 'Playwright', 'Pandas', 'Excel', 'Automation'],
    status: 'Case Study Only',
    confidential: true,
    featured: true,
  },
  {
    slug: 'inaes',
    title: 'INAES Regulatory Generator',
    type: 'Confidential Project',
    description:
      'Desktop workflow that converts spreadsheet exports into strict regulatory fixed-width files with validation, normalization, business rules and byte-level verification.',
    stack: ['Python', 'Excel', 'Validation', 'PyInstaller', 'Desktop'],
    status: 'Case Study Only',
    confidential: true,
    featured: true,
  },
];

export const projectsEs: Project[] = [
  {
    slug: 'shibusenro',
    title: 'ShibusenRO',
    type: 'Personal Project',
    typeLabel: 'Proyecto personal',
    description:
      'Plataforma integral para un juego online que integra Laravel, rAthena, identidad compartida, pagos, tienda web transaccional, herramientas propias de cliente e infraestructura cloud.',
    stack: ['Laravel', 'Docker', 'MariaDB', 'C#', 'Oracle Cloud', 'Cloudflare'],
    status: 'Case study principal',
    featured: true,
    links: [
      { label: 'Comunidad', url: 'https://shibusen.online' },
      { label: 'Plataforma RO', url: 'https://ro.shibusen.online' },
    ],
  },
  {
    slug: 'audiodrop',
    title: 'AudioDrop',
    type: 'Open Source',
    typeLabel: 'Código abierto',
    description:
      'Software musical que abarca una aplicación de escritorio para Windows funcional y un proyecto Android en desarrollo activo, con reproducción, biblioteca y herramientas multimedia.',
    stack: ['Python', 'PyQt6', 'Kotlin', 'Jetpack Compose', 'Media3', 'FFmpeg'],
    status: 'Código abierto',
    featured: true,
    links: [
      { label: 'GitHub Desktop', url: 'https://github.com/IgnacioVerde/audiodrop-desktop' },
      { label: 'GitHub Android', url: 'https://github.com/IgnacioVerde/audiodrop-android' },
    ],
  },
  {
    slug: 'redgesta',
    title: 'RedGesta',
    type: 'Confidential Project',
    typeLabel: 'Proyecto confidencial',
    description:
      'Plataforma educativa moderna en Laravel construida sobre una API legacy de terceros, combinando persistencia local, datos externos en tiempo real y operación en producción.',
    stack: ['Laravel', 'Docker', 'MySQL', 'API Integration', 'Linux'],
    status: 'Solo case study',
    confidential: true,
    featured: true,
  },
  {
    slug: 'library-modernization',
    title: 'Modernización de Biblioteca Legacy',
    type: 'Confidential Project',
    typeLabel: 'Proyecto confidencial',
    description:
      'Recuperación y migración de un catálogo bibliográfico de más de 20.000 ejemplares desde software discontinuado, seguida de procesamiento automatizado de imágenes y acceso digital moderno.',
    stack: ['Python', 'Omeka', 'ETL', 'Legacy Systems', 'Automation'],
    status: 'Solo case study',
    confidential: true,
    featured: true,
  },
  {
    slug: 'academic-automation',
    title: 'Automatización de Datos Académicos',
    type: 'Confidential Project',
    typeLabel: 'Proyecto confidencial',
    description:
      'Automatización interna para extraer, normalizar y consolidar información académica desde un sistema web legacy cerrado, sin acceso a API ni base de datos.',
    stack: ['Python', 'Playwright', 'Pandas', 'Excel', 'Automation'],
    status: 'Solo case study',
    confidential: true,
    featured: true,
  },
  {
    slug: 'inaes',
    title: 'Generador Regulatorio INAES',
    type: 'Confidential Project',
    typeLabel: 'Proyecto confidencial',
    description:
      'Flujo de escritorio que transforma planillas en archivos regulatorios de ancho fijo, con validación, normalización, reglas de negocio y verificación exacta a nivel de bytes.',
    stack: ['Python', 'Excel', 'Validation', 'PyInstaller', 'Desktop'],
    status: 'Solo case study',
    confidential: true,
    featured: true,
  },
];

export const capabilities = [
  'Full-Stack Development',
  'Backend Architecture',
  'Linux Administration',
  'Docker & Containers',
  'Cloud Infrastructure',
  'Process Automation',
  'Legacy Modernization',
  'API Integration',
  'Data Migration',
  'Desktop Applications',
  'WordPress & CMS',
  'AI-Assisted Development',
];

export const capabilitiesEs = [
  'Desarrollo Full-Stack',
  'Arquitectura Backend',
  'Administración Linux',
  'Docker y Contenedores',
  'Infraestructura Cloud',
  'Automatización de Procesos',
  'Modernización Legacy',
  'Integración de APIs',
  'Migración de Datos',
  'Aplicaciones de Escritorio',
  'WordPress y CMS',
  'Desarrollo Asistido por IA',
];

export const additionalWork: AdditionalWork[] = [
  {
    title: 'Institutional Web Platforms',
    description:
      'Production WordPress and static institutional websites, category-driven publishing workflows, ongoing content operations and Moodle administration.',
    stack: ['WordPress', 'Elementor', 'Moodle', 'HTML/CSS'],
  },
  {
    title: 'Linux, DNS & Web Operations',
    description:
      'VPS administration, Linux hardening, ports and firewall rules, Cloudflare, DNS, HTTPS, reverse proxies, updates, domain maintenance and institutional mail services.',
    stack: ['Linux', 'Cloudflare', 'DNS', 'Reverse Proxy', 'TLS'],
  },
  {
    title: 'Retail POS & Ecommerce',
    description:
      'FacturaScripts point-of-sale deployment with barcode and ticket hardware, regional configuration for Argentina, plus a separate WooCommerce storefront with Mercado Pago.',
    stack: ['FacturaScripts', 'WooCommerce', 'Mercado Pago', 'POS'],
  },
  {
    title: 'Odoo Pricing Automation',
    description:
      'Small Python/Odoo ORM utility created for a nursery to update product cost and sale prices in bulk from CSV instead of editing records one by one.',
    stack: ['Python', 'Odoo ORM', 'CSV', 'ERP Automation'],
  },
  {
    title: 'Community Automation',
    description:
      'Discord automation for roles, channels, permissions, persistent verification and repeatable server configuration as part of an online community platform.',
    stack: ['Python', 'discord.py', 'Automation'],
  },
  {
    title: 'Experimental AI Work',
    description:
      'Exploration of language-model architecture and training concepts through personal ALFA/AlfaLLM experiments, paused when compute requirements exceeded available infrastructure.',
    stack: ['LLMs', 'Python', 'Research', 'Prototyping'],
  },
];

export const additionalWorkEs: AdditionalWork[] = [
  {
    title: 'Plataformas Web Institucionales',
    description:
      'Sitios institucionales WordPress y estáticos en producción, flujos de publicación por categorías, operación continua de contenidos y administración de Moodle.',
    stack: ['WordPress', 'Elementor', 'Moodle', 'HTML/CSS'],
  },
  {
    title: 'Linux, DNS y Operaciones Web',
    description:
      'Administración de VPS, hardening de Linux, puertos y firewall, Cloudflare, DNS, HTTPS, reverse proxies, actualizaciones, dominios y servicios de correo institucional.',
    stack: ['Linux', 'Cloudflare', 'DNS', 'Reverse Proxy', 'TLS'],
  },
  {
    title: 'POS y Ecommerce',
    description:
      'Implementación de punto de venta con FacturaScripts, lector de códigos y ticketera, configuración regional para Argentina y tienda WooCommerce separada con Mercado Pago.',
    stack: ['FacturaScripts', 'WooCommerce', 'Mercado Pago', 'POS'],
  },
  {
    title: 'Automatización de Precios en Odoo',
    description:
      'Utilidad pequeña con Python y Odoo ORM para actualizar masivamente costos y precios de venta desde CSV en lugar de editar los productos uno por uno.',
    stack: ['Python', 'Odoo ORM', 'CSV', 'ERP Automation'],
  },
  {
    title: 'Automatización de Comunidades',
    description:
      'Automatización de Discord para roles, canales, permisos, verificación persistente y configuración repetible del servidor como parte de una plataforma de comunidad online.',
    stack: ['Python', 'discord.py', 'Automation'],
  },
  {
    title: 'Trabajo Experimental con IA',
    description:
      'Exploración de arquitectura y conceptos de entrenamiento de modelos de lenguaje mediante experimentos personales ALFA/AlfaLLM, pausados cuando los requisitos de cómputo superaron la infraestructura disponible.',
    stack: ['LLMs', 'Python', 'Research', 'Prototyping'],
  },
];
