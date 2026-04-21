import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/laxamana/songs`,
});

export const getAllSongs   = ()          => api.get('').then(r => r.data);
export const getSongById   = (id)        => api.get(`/${id}`).then(r => r.data);
export const addSong       = (song)      => api.post('', song).then(r => r.data);
export const updateSong    = (id, song)  => api.put(`/${id}`, song).then(r => r.data);
export const deleteSong    = (id)        => api.delete(`/${id}`).then(r => r.data);
export const searchSongs   = (keyword)   => api.get(`/search/${keyword}`).then(r => r.data);