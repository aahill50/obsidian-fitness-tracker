import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const workoutRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        notes: z.string(),
        // exerciseIds: z.array(z.string()),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.workout.create({
        data: {
          userId: ctx.session.user.id,
          notes: input.notes,
          // exercises: ctx.prisma.exercise.findMany({
          //   where: { id: { in: input.exerciseIds } },
          // }),
          timestamp: new Date(),
        },
      });
    }),
});
