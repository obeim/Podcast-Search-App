import { FastifyInstance } from "fastify";
import { searchItunes } from "../services/itunes.service.js";
import { Podcast } from "@prisma/client";

export default async function searchRoutes(fastify: FastifyInstance) {
  fastify.get("/search", async (req, reply) => {
    const { term } = req.query as { term: string };

    if (!term) return reply.status(400).send({ message: "term is requried" });

    const existingTerm = await fastify.prisma.searchTerm.findUnique({
      where: { term },
      include: { podcasts: true },
    });

    if (existingTerm) {
      return existingTerm.podcasts;
    }

    const data = await searchItunes(term);

    const podcastsData = data.map((item) => ({
      trackId: item.trackId,
      trackName: item.trackName,
      artistName: item.artistName,
      artworkUrl: item.artworkUrl600,
      feedUrl: item.feedUrl,
    }));

    await fastify.prisma.podcast.createMany({
      data: podcastsData,
      skipDuplicates: true,
    });

    const searchTermRecord = await fastify.prisma.searchTerm.upsert({
      where: { term },
      update: {},
      create: { term },
    });

    await fastify.prisma.searchTerm.update({
      where: { id: searchTermRecord.id },
      data: {
        podcasts: {
          connect: podcastsData.map((p: Podcast) => ({ trackId: p.trackId })),
        },
      },
    });

    return podcastsData;
  });
}
