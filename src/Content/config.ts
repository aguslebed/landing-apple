import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        image: z.string(),
        altTextImage: z.string(),
        description: z.string(),
        button1: z.string(),
        button2: z.string(),
        backgroundColor: z.string(),
    })
});

export const collections = {
    products,
};
