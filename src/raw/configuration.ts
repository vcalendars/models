/** Configuration defining which data should be scraped. */
export interface Configuration {
  /** List of targets to be scraped. */
  targets: Array<Target>;
}

/**
 * A scrape target.
 */
export interface Target {
  /** The url to scrape the data from. */
  url: string;
  /** The scraper type to use to retrieve the data from the html. */
  scraperName: string;
  /** Custom options to provide to scraper. */
  options?: any;
}
