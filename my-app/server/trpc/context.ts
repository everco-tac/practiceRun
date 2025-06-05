//tRPC context (auth, ...)
export async function createContext() {
    return {};
  }
  
  export type Context = Awaited<ReturnType<typeof createContext>>;
  
// Defines your tRPC Context — shared data across every procedure.
// Common for adding auth, DB client, user session, etc.
// Currently just empty {}, but you can expand it.