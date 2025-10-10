// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// schema base come funzione (riceve l'helper image)
const baseSchema = ({ image }: { image: any }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    published: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  });

// helper che crea la collection per una lingua
const makeCollection = (lang: 'en' | 'it') =>
  defineCollection({
    // loader: punta alla cartella dei markdown per la lingua
    loader: glob({
      base: `./src/exps/${lang}`,
      pattern: '**/*.{md,mdx}',
    }),
    // schema: passiamo la funzione che riceve gli helper (image)
    schema: ({ image }) => baseSchema({ image }),
  });

// esporta due collection separate
export const collections = {
  expsEnList: makeCollection('en'),
  expsItList: makeCollection('it'),
};
