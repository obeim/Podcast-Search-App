"use client";

import { useRouter } from "next/navigation";
import { debounce } from "../utils/helpers";
import { useRef } from "react";

export default function SearchBar() {
  const router = useRouter();

  const debouncedSearch = useRef(
    debounce((value: string) => {
      if (!value.trim()) router.push(`/search`);
      else router.push(`/search?q=${encodeURIComponent(value.trim())}`);
    }, 400)
  ).current;

  return (
    <input
      type="text"
      placeholder="Search through over 70 million podcasts and episodes..."
      onChange={(e) => {
        debouncedSearch(e.target.value);
      }}
      onFocus={(e) => {
        if (!e.target.value) debouncedSearch(e.target.value);
      }}
      className="
      xl:w-[90%] md:w-[70%] w-full rounded-[10px] py-1 h-8 text-center text-white outline-none
      border border-white/30 bg-background-input placeholder:text-sm
      placeholder:text-white/40
      focus:border-border-accent focus:bg-white/5 focus:placeholder:opacity-0
    "
    />
  );
}
