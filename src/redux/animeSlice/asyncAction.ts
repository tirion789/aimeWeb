import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { animeItem } from './types';

export const fetchAnimes = createAsyncThunk<animeItem[]>('animes/fetchAnimesStatus', async () => {
  const { data } = await axios.get<animeItem[]>(
    'https://api.anilibria.tv/v3/title/list?code_list=one-punch-man, bleach, bleach-sennen-kessen-hen, boruto-naruto-next-generations, steinsgate, black-clover&include=raw_torrent',
  );
  return data;
});

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async (code: string) => {
  const { data } = await axios.get<animeItem>('https://api.anilibria.tv/v3/title?code=' + code);
  return data;
});
