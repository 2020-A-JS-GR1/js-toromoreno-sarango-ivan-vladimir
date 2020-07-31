import { Song } from './song';

export interface Artist {
  name: string;
  rating: number;
  foundationDate: Date;
  currentlyActive: boolean;
  photoUrl: string;
  songs: Song[];
}
