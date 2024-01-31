type Launchpad = {
  images: {
    large: string[];
  };
  name: string;
  full_name: string;
  locality: string;
  region: string;
  latitude: 28.6080585;
  longitude: -80.6039558;
  launch_attempts: 55;
  launch_successes: 55;
  rockets: string[];
  timezone: string;
  launches: Array[Launch["id"]];
  status: string; // probably an enum
  details: string;
  id: string;
};
