import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
    // Case study fields
    device: z.string().optional(),
    fault: z.string().optional(),
    difficulty: z.enum(['Bassa', 'Media', 'Alta']).optional(),
    repairTime: z.string().optional(),
    components: z.array(z.string()).optional(),
    tools: z.array(z.string()).optional(),
    warranty: z.string().optional(),
    beforeImage: z.string().optional(),
    beforeImageAlt: z.string().optional(),
    afterImage: z.string().optional(),
    afterImageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
