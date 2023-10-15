import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ImageComponent } from "./components/PlayerImage/PlayerImage";
import { AlbumImageComponent } from "./components/AlbumImage/AlbumImage";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <ImageComponent label='Austin by Post Malone' />
            <ImageComponent label='Austin by Post Malone' />
            <ImageComponent label='Austin by Post Malone' />
            <ImageComponent label='Austin by Post Malone' />
            <ImageComponent label='Austin by Post Malone' />
            <ImageComponent label='Austin by Post Malone' />
          </div>
          <h2 className="font-semibold text-2xl mt-10">Made for Marquinho</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <AlbumImageComponent label="Sera que chico estava certo ?" />
            <AlbumImageComponent label="Sera que chico estava certo ?" />
            <AlbumImageComponent label="Sera que chico estava certo ?" />
            <AlbumImageComponent label="Sera que chico estava certo ?" />
            <AlbumImageComponent label="Sera que chico estava certo ?" />
            <AlbumImageComponent label="Sera que chico estava certo ?" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
