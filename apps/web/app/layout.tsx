import "./globals.css";
import type { Metadata } from "next";
import SearchBar from "../components/SearchBar";
import NavArrows from "../components/NavArrows";
import Link from "next/link";
import ThreeDots from "../components/icons/ThreeDots";

export const metadata: Metadata = {
  title: "Podcast Search",
  description: "Search for your favorite podcasts",
};

const sideLinks = [
  { title: "Home", link: "/" },
  { title: "Discover", link: "/" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex bg-background text-white/70">
        <nav className="w-[260px] !h-screen border-r bg-background-sidebar border-r-border-subtle px-4">
          <Link href="/">
            <img alt="logo" className=" mt-4 w-12 h-12" src="logo.svg" />
          </Link>

          <div className="flex flex-col text-white font-semibold mt-12 text-sm gap-4">
            {sideLinks.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
        <section className="w-full ">
          <header className="flex gap-3 py-2 px-4 items-center">
            <NavArrows />
            <SearchBar />
            <div className="w-[168.5px] flex gap-2 text-[13px]">
              <button className="btn-gradient  w-[40%]">Log in</button>
              <button className="btn-gradient w-[40%]">Sign up</button>
              <span>
                <ThreeDots className="h-full fill-white/70 hover:fill-white cursor-pointer" />
              </span>
            </div>
          </header>
          <main className="mx-auto py-8">{children}</main>
        </section>
      </body>
    </html>
  );
}
