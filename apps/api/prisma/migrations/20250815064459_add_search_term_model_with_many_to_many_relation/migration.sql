/*
  Warnings:

  - The primary key for the `Podcast` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Podcast` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Podcast` table. All the data in the column will be lost.
  - You are about to drop the column `searchedTerm` on the `Podcast` table. All the data in the column will be lost.
  - Made the column `artworkUrl` on table `Podcast` required. This step will fail if there are existing NULL values in that column.
  - Made the column `feedUrl` on table `Podcast` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."Podcast_trackId_key";

-- AlterTable
ALTER TABLE "public"."Podcast" DROP CONSTRAINT "Podcast_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "searchedTerm",
ALTER COLUMN "artworkUrl" SET NOT NULL,
ALTER COLUMN "feedUrl" SET NOT NULL,
ADD CONSTRAINT "Podcast_pkey" PRIMARY KEY ("trackId");

-- CreateTable
CREATE TABLE "public"."SearchTerm" (
    "id" SERIAL NOT NULL,
    "term" TEXT NOT NULL,

    CONSTRAINT "SearchTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_PodcastToSearchTerm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PodcastToSearchTerm_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "SearchTerm_term_key" ON "public"."SearchTerm"("term");

-- CreateIndex
CREATE INDEX "_PodcastToSearchTerm_B_index" ON "public"."_PodcastToSearchTerm"("B");

-- AddForeignKey
ALTER TABLE "public"."_PodcastToSearchTerm" ADD CONSTRAINT "_PodcastToSearchTerm_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Podcast"("trackId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PodcastToSearchTerm" ADD CONSTRAINT "_PodcastToSearchTerm_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."SearchTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;
