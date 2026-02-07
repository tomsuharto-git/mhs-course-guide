import { Track } from '../types';
import { mathTrack } from './math';
import { englishTrack } from './english';
import { scienceTrack } from './science';
import { socialStudiesTrack } from './social-studies';
import { worldLanguagesTrack } from './world-languages';

export const allTracks: Track[] = [mathTrack, englishTrack, scienceTrack, socialStudiesTrack, worldLanguagesTrack];

export function getTrackById(id: string): Track | undefined {
  return allTracks.find((t) => t.id === id);
}

export { mathTrack, englishTrack, scienceTrack, socialStudiesTrack, worldLanguagesTrack };
