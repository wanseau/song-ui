import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function Header({ query, setQuery, onSearch }) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 px-6 py-3 bg-[#0f0f0f] border-b border-zinc-800">
      <div className="flex items-center gap-2">
        <MusicNoteIcon sx={{ color: '#ff0000' }} />
        <span className="text-xl font-bold">SongTube</span>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); onSearch(); }}
        className="flex-1 max-w-2xl mx-auto flex items-center bg-zinc-900 border border-zinc-700 rounded-full overflow-hidden"
      >
        <InputBase
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title, artist, album, genre…"
          sx={{ flex: 1, color: 'white', px: 3, py: 0.5 }}
        />
        <IconButton type="submit" sx={{ color: 'white', bgcolor: '#272727', borderRadius: 0, px: 3 }}>
          <SearchIcon />
        </IconButton>
      </form>
    </header>
  );
}