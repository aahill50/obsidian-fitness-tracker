import { Rep, UnitType } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const exerciseRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        workoutId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.exercise.create({
        data: {
          userId: ctx.session.user.id,
          name: input.name,
          workoutId: input.workoutId,
        },
      });
    }),
});
