import { Song } from './song';

export interface Artist {
  name: string;
  rating: number;
  foundationDate: Date | string;
  currentlyActive: boolean;
  photoUrl: string;
  songs?: Song[];
}
