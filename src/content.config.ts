// src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = ({ image }: any) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    published: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  });

const makeCollection = (lang: string) =>
  defineCollection({
    loader: glob({ base: `./src/exps/${lang}`, pattern: '**/*.{md,mdx}' }),
    schema: baseSchema,
  });

export const collections = {
  expsEnList: makeCollection('en'),
  expsItList: makeCollection('it'),
};