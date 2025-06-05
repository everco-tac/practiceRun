// Actual tRPC procedure (backedn logic)
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const helloRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { text: `Hello, ${input.name}` };
    }),
});
