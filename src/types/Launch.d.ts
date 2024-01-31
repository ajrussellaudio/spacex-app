type Launch = {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: unknown[];
  };
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: unknown | null;
      launch: unknown | null;
      media: unknown | null;
      recovery: unknown | null;
    };
    flickr: {
      small: unknown[];
      original: unknown[];
    };
    presskit: unknown | null;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Array<{
    time: number;
    altitude: number | null;
    reason: string;
  }>;
  details: string;
  crew: unknown[];
  ships: unknown[];
  capsules: unknown[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Array<{
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: unknown | null;
    landing_type: unknown | null;
    landpad: unknown | null;
  }>;
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: unknown | null;
  id: string;
};
