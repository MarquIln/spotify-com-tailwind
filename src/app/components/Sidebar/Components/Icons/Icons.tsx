import { HomeIcon, Library, Search } from "lucide-react";

export function HomeIconComponent() {
  return (
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
    >
      <HomeIcon />
      Home
    </a>
  );
}

export function SearchIconComponent() {
  return (
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
    >
      <Search />
      Search
    </a>
  );
}

export function LibraryIconComponent() {
  return (
    <a
      href=""
      className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
    >
      <Library />
      Library
    </a>
  );
}
