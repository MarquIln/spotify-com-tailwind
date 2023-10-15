import Image from "next/image";

interface AlbumImageComponentProps {
  label: string
}

export function AlbumImageComponent({label}: AlbumImageComponentProps) {
  return (
    <a
      href=""
      className="bg-white/80 p-3 flex flex-col gap-2 rounded-md hover:bg-white/90"
    >
      <Image
        src="/albumPostMalone.jpeg"
        className="w-full"
        width={104}
        height={104}
        alt="Capa do álbum"
      />
      <strong className="text-semibold">Daily Mix 1</strong>
      <span className="text-xs text-zinc-500">
        {label}
      </span>
    </a>
  );
}
