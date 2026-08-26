export type Project = {
  slug: string;
  title: string;
  type: 'Personal Project' | 'Open Source' | 'Confidential Project' | 'Professional Tool';
  description: string;
  stack: string[];
  status: string;
  github?: string;
  live?: string;
  confidential?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'shibusenro',
    title: 'ShibusenRO',
    type: 'Personal Project',
    description:
      'Full-stack platform integrating a Laravel web application with a legacy MMORPG server, shared authentication, payments, in-game economy, a custom launcher and cloud infrastructure.',
    stack: ['Laravel', 'Docker', 'MariaDB', 'C#', 'Oracle Cloud', 'Cloudflare'],
    status: 'Case Study',
    featured: true,
  },
  {
    slug: 'audiodrop',
    title: 'AudioDrop',
    type: 'Open Source',
    description:
      'Desktop and Android music projects focused on local playback, playlists, media discovery, audio downloading and native application experiences.',
    stack: ['Python', 'PyQt6', 'Kotlin', 'Jetpack Compose', 'Media3', 'FFmpeg'],
    status: 'Open Source',
    github: 'https://github.com/IgnacioVerde/audiodrop-desktop',
    featured: true,
  },
  {
    slug: 'redgesta',
    title: 'RedGesta',
    type: 'Confidential Project',
    description:
      'Modern educational platform built around a legacy third-party API, combining locally persisted structural data with real-time external pricing and promotions.',
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
      'Migration and modernization of a 20,000+ item bibliographic catalog from discontinued legacy software, including data recovery, normalization and automated media processing.',
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
      'Internal automation for extracting, normalizing and consolidating academic information from a closed legacy system without API or database access.',
    stack: ['Python', 'Playwright', 'Pandas', 'Excel', 'Automation'],
    status: 'Case Study Only',
    confidential: true,
    featured: true,
  },
  {
    slug: 'inaes',
    title: 'INAES Regulatory Generator',
    type: 'Professional Tool',
    description:
      'Desktop application that transforms spreadsheet data into strict fixed-width regulatory files with validation, business rules and byte-level integrity checks.',
    stack: ['Python', 'Excel', 'Validation', 'PyInstaller', 'Desktop'],
    status: 'Case Study',
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
