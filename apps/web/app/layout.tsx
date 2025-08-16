import "./globals.css";
import type { Metadata } from "next";
import SearchBar from "../components/SearchBar";
import NavArrows from "../components/NavArrows";
import Link from "next/link";
import ThreeDots from "../components/icons/ThreeDots";

export const metadata: Metadata = {
  title: "Podcast Search",
  description: "Search for your favorite podcasts",
  icons: { icon: { url: "./favicon.svg" } },
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
      <body className="min-h-screen bg-background text-white/70 flex">
        {/* Sidebar */}
        <nav
          className="
            w-[225px] 
            h-screen 
            hidden
            fixed top-0 left-0 
            border-r border-r-border-subtle 
            bg-background-sidebar 
            px-4 py-6
            md:flex flex-col
            z-20
          "
        >
          <Link href="/" className="flex items-center justify-center">
            <img alt="logo" className="w-12 h-12" src="logo.svg" />
          </Link>

          <div className="flex flex-col text-white font-semibold mt-12 text-sm gap-4">
            {sideLinks.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Main content */}
        <div className="flex-1 md:ml-[225px] flex flex-col">
          {/* Header */}
          <header className="flex gap-3 py-2 px-4 items-center">
            <NavArrows />
            <SearchBar />
            <div className="md:flex hidden gap-2 text-[13px] ml-auto md:!w-[168px] items-center">
              <button className="btn-gradient py-1 flex-1">Log in</button>
              <button className="btn-gradient  py-1 flex-1">Sign up</button>
            </div>
            <span>
              <ThreeDots className="h-full fill-white/70 hover:fill-white cursor-pointer" />
            </span>
          </header>

          {/* Page content */}
          <main className="flex-1  py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
