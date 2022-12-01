import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

await serve((req: Request) => {
    return new Response({},{status: 301, headers: {'Location':`https://f004.backblazeb2.com/file/danielr1996-registry${new URL(req.url).pathname}`}})
});
