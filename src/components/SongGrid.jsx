import SongCard from './SongCard';

export default function SongGrid({ songs, onSelect }) {
  if (!songs.length) {
    return <p className="text-zinc-500 text-center mt-20">No songs found.</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {songs.map(song => (
        <SongCard key={song.id} song={song} onClick={onSelect} />
      ))}
    </div>
  );
}