import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
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
      .array(
        z.object({
          component: z.enum([
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
          ]),
          props: z.record(z.any()).optional(),
        })
      )
      .optional(),
  }),
});

const projectTldrs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/project-tldrs' }),
  schema: z.object({}).passthrough(),
});

export const collections = { projects, projectTldrs };
