import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { Movie } from "~/types/constTypes";

export const productRouter = createTRPCRouter({
    getAllPost: publicProcedure.input(z.object({
        number: z.number().optional()
    })).query(async ({ input }) => {
        const limit = input?.number != undefined ? input.number : 20
        const response = await fetch(`https://freetestapi.com/api/v1/movies?limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch users')
        }
        const res = await response.json() as Movie[];
        return res
    }),

    getByTitle: publicProcedure.input(z.object({
        title: z.string()
    })).query(async ({ input }) => {
        const response = await fetch(`https://freetestapi.com/api/v1/movies?search=${input.title}`);
        if (!response.ok) {
            // throw new Error('Failed to fetch product')
            new TRPCError({
                code: "BAD_GATEWAY",
                message: "TRPC ERROR"
            })
        }
        return response
    })
})