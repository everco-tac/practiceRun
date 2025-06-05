'use client';

// React context provider for React Query and tRPC
//This wraps your app in:

// QueryClientProvider (TanStack Query)
// trpc.Provider (for calling your API)
// Configures the httpBatchLink to use /api/trpc.
// Essentially connects your frontend to the backend cleanly.

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '@/lib/trpc';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
