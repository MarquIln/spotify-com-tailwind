import { Play } from "lucide-react";
import Image from "next/image";

interface ImageComponentProps {
  // src: string
  label: string
}

export function ImageComponent({label} : ImageComponentProps) {
  return (
    <a
      href="#"
      className="bg-white/80 rounded flex items-center group gap-4 overflow-hidden hover:bg-white/20 transition-colors"
    >
      <Image
        src="/albumPostMalone.jpeg"
        width={104}
        height={104}
        alt="Capa do álbum"
      />
      <strong>{label}</strong>
      <button className="h-12 w-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}
