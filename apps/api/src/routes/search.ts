import { FastifyInstance } from "fastify";
import { searchItunes } from "../services/itunes.service.ts";
import { Podcast } from "@prisma/client";

export default async function searchRoutes(fastify: FastifyInstance) {
  fastify.get("/search", async (req, reply) => {
    const { term } = req.query as { term: string };

    if (!term) {
      return reply.code(400).send({ error: "Search term is required" });
    }

    const data = await searchItunes(term);

    const podcasts = data.results.map((item: Podcast) => ({
      trackId: item.trackId,
      trackName: item.trackName,
      artistName: item.artistName,
      artworkUrl: item.artworkUrl,
      feedUrl: item.feedUrl,
    }));

    await fastify.prisma.podcast.createMany({
      data: podcasts,
      skipDuplicates: true,
    });

    return podcasts;
  });
}
