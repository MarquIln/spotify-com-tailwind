import { PlaylistComponent } from "./Components/Playlist";
import { HomeIconComponent, LibraryIconComponent, SearchIconComponent } from "./Components/Icons/Icons";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-600 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <HomeIconComponent />
            <SearchIconComponent />
            <LibraryIconComponent />
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-4">
            <PlaylistComponent label='Aniversarios' />
            <PlaylistComponent label='Top Hits Brazil' />
            <PlaylistComponent label='Hits da Internet' />
            <PlaylistComponent label='Top 100 do Mundo' />
            <PlaylistComponent label='Gostos Diferentes' />              
            <PlaylistComponent label='Sofrencia do Sertanejo' />
            <PlaylistComponent label='My Playlist de Trap' />
            <PlaylistComponent label='Playlist Funk Antigo' />
            <PlaylistComponent label='Funk ATUALIZADO' />
          </nav>
        </aside>
  )
}