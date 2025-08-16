import PodcastCard from "../../components/PodcastCard";
import { Podcast } from "../../types/podcast";

export default function PodcastResults({ results }: { results: Podcast[] }) {
  return (
    <div className=" flex flex-wrap px-4 gap-6">
      {results.map((pod) => (
        <PodcastCard key={pod.trackId} podcast={pod} />
      ))}
    </div>
  );
}
