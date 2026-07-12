import { file, glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";


const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  img: z.string(),
  link: z.string(),
  date: z.string(),
  cta: z.string().optional()
});

const projects = defineCollection({
  loader: file("src/data/games.json"),
  schema: ProjectSchema,
});

export const collections = { projects };
