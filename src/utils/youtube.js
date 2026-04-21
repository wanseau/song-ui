// Extracts an 11-char YouTube video ID from common URL formats
export function getYouTubeId(url) {
  if (!url) return null;
  const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export const getThumbnail = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
};

export const getEmbedUrl = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
};