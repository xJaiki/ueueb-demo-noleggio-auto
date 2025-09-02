// Project schema and sample data
// You can add/edit projects here. Images: one cover + gallery array.

/**
 * @typedef {Object} Project
 * @property {string} id - unique slug
 * @property {string} title
 * @property {string} subtitle
 * @property {string} cover - url/path of main image
 * @property {string[]} gallery - additional images
 * @property {string[]} tags
 * @property {string} content - Markdown-formatted description
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'pizzeria-bella',
    title: 'Pizzeria Bella',
    subtitle: 'E-commerce veloce per asporto',
    cover: '/logo.svg',
    gallery: ['/vite.svg'],
    tags: ['React', 'Vite', 'Tailwind', 'Stripe'],
    content: `## Obiettivo\nCreare un'esperienza di acquisto veloce per asporto.\n\n**Stack**: React, Vite, Tailwind, Stripe.\n\n- Pagamenti rapidi\n- Menu dinamico\n- Lighthouse 95+`,
  },
  {
    id: 'gestionale-forno',
    title: 'Gestionale Forno',
    subtitle: 'ERP leggero per produzione artigianale',
    cover: '/vite.svg',
    gallery: ['/logo.svg', '/vite.svg'],
    tags: ['Node', 'Postgres', 'Cloudflare'],
    content: `### Contesto\nRidurre sprechi e ottimizzare i tempi di produzione.\n\n### Funzioni chiave\n- Tracciabilità lotti\n- Pianificazione\n- Dashboard KPI`,
  },{
    id: 'pizzeria-bella',
    title: 'Pizzeria Bella',
    subtitle: 'E-commerce veloce per asporto',
    cover: '/logo.svg',
    gallery: ['/vite.svg'],
    tags: ['React', 'Vite', 'Tailwind', 'Stripe'],
    content: `## Obiettivo\nCreare un'esperienza di acquisto veloce per asporto.\n\n**Stack**: React, Vite, Tailwind, Stripe.\n\n- Pagamenti rapidi\n- Menu dinamico\n- Lighthouse 95+`,
  },
  {
    id: 'gestionale-forno',
    title: 'Gestionale Forno',
    subtitle: 'ERP leggero per produzione artigianale',
    cover: '/vite.svg',
    gallery: ['/logo.svg', '/vite.svg'],
    tags: ['Node', 'Postgres', 'Cloudflare'],
    content: `### Contesto\nRidurre sprechi e ottimizzare i tempi di produzione.\n\n### Funzioni chiave\n- Tracciabilità lotti\n- Pianificazione\n- Dashboard KPI`,
  },{
    id: 'pizzeria-bella',
    title: 'Pizzeria Bella',
    subtitle: 'E-commerce veloce per asporto',
    cover: '/logo.svg',
    gallery: ['/vite.svg'],
    tags: ['React', 'Vite', 'Tailwind', 'Stripe'],
    content: `## Obiettivo\nCreare un'esperienza di acquisto veloce per asporto.\n\n**Stack**: React, Vite, Tailwind, Stripe.\n\n- Pagamenti rapidi\n- Menu dinamico\n- Lighthouse 95+`,
  },
  {
    id: 'gestionale-forno',
    title: 'Gestionale Forno',
    subtitle: 'ERP leggero per produzione artigianale',
    cover: '/vite.svg',
    gallery: ['/logo.svg', '/vite.svg'],
    tags: ['Node', 'Postgres', 'Cloudflare'],
    content: `### Contesto\nRidurre sprechi e ottimizzare i tempi di produzione.\n\n### Funzioni chiave\n- Tracciabilità lotti\n- Pianificazione\n- Dashboard KPI`,
  },{
    id: 'pizzeria-bella',
    title: 'Pizzeria Bella',
    subtitle: 'E-commerce veloce per asporto',
    cover: '/logo.svg',
    gallery: ['/vite.svg'],
    tags: ['React', 'Vite', 'Tailwind', 'Stripe'],
    content: `## Obiettivo\nCreare un'esperienza di acquisto veloce per asporto.\n\n**Stack**: React, Vite, Tailwind, Stripe.\n\n- Pagamenti rapidi\n- Menu dinamico\n- Lighthouse 95+`,
  },
  {
    id: 'gestionale-forno',
    title: 'Gestionale Forno',
    subtitle: 'ERP leggero per produzione artigianale',
    cover: '/vite.svg',
    gallery: ['/logo.svg', '/vite.svg'],
    tags: ['Node', 'Postgres', 'Cloudflare'],
    content: `### Contesto\nRidurre sprechi e ottimizzare i tempi di produzione.\n\n### Funzioni chiave\n- Tracciabilità lotti\n- Pianificazione\n- Dashboard KPI`,
  },{
    id: 'pizzeria-bella',
    title: 'Pizzeria Bella',
    subtitle: 'E-commerce veloce per asporto',
    cover: '/logo.svg',
    gallery: ['/vite.svg'],
    tags: ['React', 'Vite', 'Tailwind', 'Stripe'],
    content: `## Obiettivo\nCreare un'esperienza di acquisto veloce per asporto.\n\n**Stack**: React, Vite, Tailwind, Stripe.\n\n- Pagamenti rapidi\n- Menu dinamico\n- Lighthouse 95+`,
  },
  {
    id: 'gestionale-forno',
    title: 'Gestionale Forno',
    subtitle: 'ERP leggero per produzione artigianale',
    cover: '/vite.svg',
    gallery: ['/logo.svg', '/vite.svg'],
    tags: ['Node', 'Postgres', 'Cloudflare'],
    content: `### Contesto\nRidurre sprechi e ottimizzare i tempi di produzione.\n\n### Funzioni chiave\n- Tracciabilità lotti\n- Pianificazione\n- Dashboard KPI`,
  },
];
