import Image from "next/image";
import { Podcast } from "../types/podcast";

export default function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <div className="rounded shadow-sm hover:shadow-md transition w-[233px]">
      <Image
        src={podcast.artworkUrl}
        alt={podcast.trackName}
        width={233}
        height={233}
        loading="lazy"
        className="mb-3 rounded object-cover w-[233px] h-[233px]"
      />
      <h3 className="font-semibold text-white text-sm">{podcast.trackName}</h3>
      <p className=" text-foreground-highlightRed text-xs font-semibold ">
        {podcast.artistName}
      </p>
    </div>
  );
}
