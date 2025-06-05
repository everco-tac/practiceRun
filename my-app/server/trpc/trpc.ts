// initTRPC & base procedures
//Bootstraps tRPC:
// Initializes the base router and procedure factory.
// Sets up publicProcedure, router, etc.

import { initTRPC } from '@trpc/server';
import type { Context } from './context';

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
