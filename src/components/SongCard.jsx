import { Chip } from '@mui/material';
import { getThumbnail } from '../utils/youtube';

export default function SongCard({ song, onClick }) {
  const thumb = getThumbnail(song.url);

  return (
    <div
      onClick={() => onClick(song)}
      className="cursor-pointer group transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800">
        {thumb ? (
          <img
            src={thumb}
            alt={song.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-500">
            No preview
          </div>
        )}
      </div>
      <div className="mt-3 px-1">
        <h3 className="font-semibold text-base line-clamp-2">{song.title}</h3>
        <p className="text-sm text-zinc-400 mt-1">{song.artist}</p>
        <div className="flex gap-2 mt-2 text-xs text-zinc-500">
          <span>{song.album}</span>
          {song.genre && (
            <Chip label={song.genre} size="small"
              sx={{ bgcolor: '#272727', color: '#aaa', height: 20 }} />
          )}
        </div>
      </div>
    </div>
  );
}