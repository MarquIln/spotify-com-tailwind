interface PlaylistComponentProps {
  label: string;
}

export function PlaylistComponent({ label }: PlaylistComponentProps) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
      {label}
    </a>
  );
}
