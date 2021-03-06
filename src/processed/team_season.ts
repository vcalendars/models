import { Event, SerialisedEvent } from '../raw';

/**
 * Team Season created by the data-worker, consists of event data sorted into teams.
 */
export interface TeamSeason {
  /** The name of the competition. */
  competitionName: string;
  /** The name of the season. */
  seasonName: string;
  /** The name of the team playing in the season. */
  teamName: string;
  /** The events the team will participate in during the seaon. */
  events: Array<Event>;
  /** The time the season was last scraped. */
  lastScraped: Date;
}

export interface SerialisedTeamSeason {
  competitionName: string;
  seasonName: string;
  teamName: string;
  events: Array<SerialisedEvent>;
  lastScraped: string;
}
