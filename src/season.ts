import { Match, SerialisedMatch } from './match';

/**
 * A season of volleyball, consists of many matches.
 */
export class Season {
  constructor(name: string, matches: Match[]) {
    this.name = name;
    this.matches = matches;
  }
  /** Name of the season */
  name: string;
  /** List of all the matches that make up the season */
  matches: Array<Match>;
}

export class SerialisedSeason {
  constructor(name: string, matches: SerialisedMatch[]) {
    this.name = name;
    this.matches = matches;
  }
  /** Name of the season */
  name: string;
  /** List of all the matches that make up the season */
  matches: Array<SerialisedMatch>;
}
