import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared enum for project-block section components — used by both projects and buildPages.
const sectionComponent = z.enum([
  'ProjectHero',
  'ProjectGallery',
  'ProjectTextBlock',
  'ProjectMeta',
  'ProjectIntro',
  'ProjectCallout',
  'ProjectQuote',
  'ProjectMetricsBand',
  'ProjectBeforeAfter',
  'ProjectLearnings',
  'ProjectProcessSteps',
  'ProjectFindingsGrid',
  'ProjectHowMightWe',
  'ProjectDecisionLog',
  'ProjectPersona',
  'ProjectProblemKeyInfo',
  'ProjectTextImage',
  'ProjectImageGalleryGrid',
  'ProjectAccessibilityAudit',
  'MoreProjects',
]);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    filename: z.string(),
    mode: z.string().default('NORMAL'),
    type: z.string(),
    year: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    oneliner: z.string(),
    isNew: z.boolean().optional(),
    hidden: z.boolean().optional(),
    statusline: z.array(
      z.object({
        label: z.string(),
        lime: z.boolean().optional(),
      })
    ),
    order: z.number(),
    sections: z
      .array(z.object({ component: sectionComponent, props: z.record(z.any()).optional() }))
      .optional(),
  }),
});

const projectTldrs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/project-tldrs' }),
  schema: z.object({}).passthrough(),
});

const buildPages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/build-pages' }),
  schema: z.object({
    title: z.string(),
    filename: z.string(),
    mode: z.string().default('NORMAL'),
    type: z.string(),
    year: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    oneliner: z.string(),
    statusline: z.array(
      z.object({
        label: z.string(),
        lime: z.boolean().optional(),
      })
    ),
    order: z.number(),
    sections: z
      .array(z.object({ component: sectionComponent, props: z.record(z.any()).optional() }))
      .optional(),
  }),
});

const builds = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/builds' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects, projectTldrs, builds, buildPages };
