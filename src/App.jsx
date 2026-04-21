import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Header from './components/Header';
import SongGrid from './components/SongGrid';
import VideoPlayer from './components/VideoPlayer';
import { getAllSongs, searchSongs } from './api/songApi';

export default function App() {
  const [songs, setSongs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const loadAll = async () => {
    setLoading(true);
    try { setSongs(await getAllSongs()); }
    catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const handleSearch = async () => {
    if (!query.trim()) return loadAll();
    setLoading(true);
    try { setSongs(await searchSongs(query.trim())); }
    catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadAll(); }, []);

  return (
    <div className="min-h-screen">
      <Header query={query} setQuery={setQuery} onSearch={handleSearch} />

      {loading ? (
        <div className="flex justify-center mt-20"><CircularProgress /></div>
      ) : (
        <SongGrid songs={songs} onSelect={setSelected} />
      )}

      <VideoPlayer song={selected} onClose={() => setSelected(null)} />
    </div>
  );
}