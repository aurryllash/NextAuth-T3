import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
    getAllPost: publicProcedure.input(z.object({
        number: z.number().optional()
    })).query(async ({ input }) => {
        const limit = input?.number != undefined ? input.number : 20
        const response = await fetch(`https://freetestapi.com/api/v1/movies?limit=${limit}`);
        return response;
    })
})