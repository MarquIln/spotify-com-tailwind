import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-600 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-4">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Aniversarios
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Hits Brazil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hits da Internet
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top 100 do Mundo
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Gostos Diferentes
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Sofrencia do Sertanejo
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              My Playlist de Trap
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Playlist Funk Antigo
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Funk ATUALIZADO
            </a>
          </nav>
        </aside>
  )
}