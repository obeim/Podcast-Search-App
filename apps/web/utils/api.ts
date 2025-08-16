export async function searchPodcasts(term: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search?term=${encodeURIComponent(term)}`
  );
  if (!res.ok) return [];
  return res.json();
}
