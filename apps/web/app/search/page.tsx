import { searchPodcasts } from "../../utils/api";
import { Podcast } from "../../types/podcast";
import PodcastResults from "./PodcastResults";

interface SearchPageProps {
  searchParams: { q?: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const term = params.q?.trim();
  let results: Podcast[] = [];

  if (term) {
    try {
      results = await searchPodcasts(term);
    } catch (error) {
      console.error("Error fetching podcasts:", error);
    }
  }

  return (
    <div className="space-y-4">
      {term && (
        <div className="pt-5 pb-3 border-b bg-background z-20 border-border-subtle sticky top-10">
          <h1 className="text-white font-semibold px-4">
            Top podcasts for {term}
          </h1>
        </div>
      )}
      {!term && (
        <p className="text-white/70 text-center py-10">
          Type in a search term to start.
        </p>
      )}

      {term && results.length === 0 && (
        <p className="text-white/70 text-center py-10">
          No results found for "{term}"
        </p>
      )}
      {results.length > 0 && <PodcastResults results={results} />}
    </div>
  );
}
