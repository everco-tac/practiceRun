// Exports all routers and types for the tRPC server
// so if you have anoher router add under helloRouter
// Your main appRouter:

// Combines all subrouters (helloRouter, userRouter, etc).
// The type AppRouter is imported into lib/trpc.ts to share with client.

import { router } from './trpc';
import { helloRouter } from './router/hello';

export const appRouter = router({
  hello: helloRouter,
});

export type AppRouter = typeof appRouter;
