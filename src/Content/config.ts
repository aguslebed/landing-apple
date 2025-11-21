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


const NavBarMenu = defineCollection({
    type: "content",
    schema: z.object({
        menus: z.array(
            z.object({
                title: z.string(),
                items: z.array(z.string()),
            })
        ),
    }),
});

export const collections = {
    products,
    NavBarMenu,
};
