import { UnitType } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const repRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        unitId: z.string(),
        unitType: z.nativeEnum(UnitType),
        exerciseId: z.string(),
        repAmount: z.number(),
        unitAmount: z.number(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.rep.create({
        data: {
          unitId: input.unitId,
          unitType: input.unitType,
          exerciseId: input.exerciseId,
          repAmount: input.repAmount,
          unitAmount: input.unitAmount,
        },
      });
    }),
});
