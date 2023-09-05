import { createTRPCRouter } from "~/server/api/trpc";
import { workoutRouter } from "~/server/api/routers/workout";
import { exerciseRouter } from "~/server/api/routers/exercise";
import { repRouter } from "~/server/api/routers/rep";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  workout: workoutRouter,
  exercise: exerciseRouter,
  rep: repRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
