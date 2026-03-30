import { appRouter } from "@/trpc/routers/_app"
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { createTRPCContext } from "@/trpc/init"

const handler = (req: Request) => 
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: createTRPCContext,
        onError({ error, path }) {
            console.error(`[tRPC error] on ${path}:`, error);
        },
    })

    export { handler as GET, handler as POST}