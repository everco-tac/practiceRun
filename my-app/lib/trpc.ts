// trpc client configuration
//Sets up the trpc object to allow this:

import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/server/trpc';

export const trpc = createTRPCReact<AppRouter>();
