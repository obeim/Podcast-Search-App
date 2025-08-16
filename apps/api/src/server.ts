import Fastify from "fastify";
import cors from "@fastify/cors";
import prismaPlugin from "./plugins/prisma.js";
import searchRoutes from "./routes/search.js";

const server = Fastify({
  logger: true,
});

server.register(cors, { origin: true });
server.register(prismaPlugin);

server.register(searchRoutes);

server.get("/", async () => {
  return { message: "API is running" };
});

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "0.0.0.0";

try {
  await server.listen({ port, host });
  server.log.info(`Server listening on http://${host}:${port}`);
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
