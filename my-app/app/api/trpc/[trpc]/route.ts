// trpc route handler for Next.js API routes
// traditional look: pages/api/trpc/[trpc].ts
// When you call trpc.hello.greet.useQuery(...) on the client, this endpoint gets hit.
// Handles requests like: /api/trpc/hello.greet


import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/trpc';
import { createContext } from '@/server/trpc/context';

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });
};

export { handler as GET, handler as POST };
