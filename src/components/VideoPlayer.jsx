import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { getEmbedUrl } from '../utils/youtube';

export default function VideoPlayer({ song, onClose }) {
  if (!song) return null;
  const embed = getEmbedUrl(song.url);

  return (
    <Dialog
      open={Boolean(song)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{ sx: { bgcolor: '#0f0f0f', color: 'white' } }}
    >
      <div className="relative">
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: 'white', zIndex: 10 }}
        >
          <CloseIcon />
        </IconButton>

        <div className="aspect-video w-full bg-black">
          {embed ? (
            <iframe
              src={embed}
              title={song.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              Invalid video URL
            </div>
          )}
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold">{song.title}</h2>
          <p className="text-zinc-400 mt-1">{song.artist} • {song.album}</p>
          {song.genre && (
            <span className="inline-block mt-3 px-3 py-1 bg-zinc-800 rounded-full text-xs">
              {song.genre}
            </span>
          )}
        </div>
      </div>
    </Dialog>
  );
}