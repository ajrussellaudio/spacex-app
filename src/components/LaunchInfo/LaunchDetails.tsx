import { Box, Grid, Typography } from "@mui/material";
import { prettyDate } from "../../lib/prettyDate";
import { PayloadDetails } from "./PayloadDetails";
import { CoreDetails } from "./CoreDetails";

type LaunchDetailsProps = Launch;

export function LaunchDetails({ name, date_utc, details, links, payloads, cores }: LaunchDetailsProps) {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <Typography variant="h1">{name}</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {prettyDate(date_utc)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {details}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <img src={links.patch.small} alt={`Patch for ${name}`} />
          </Grid>
        </Grid>
        {payloads.length > 0 && (
          <>
            <Typography variant="h2" gutterBottom>
              Payloads
            </Typography>
            {payloads.map((payload) => (
              <PayloadDetails key={payload} id={payload} />
            ))}
          </>
        )}
        {cores.length > 0 && (
          <>
            <Typography variant="h2" gutterBottom>
              Cores
            </Typography>
            {cores.map(({ core }) => (
              <CoreDetails key={core} id={core} />
            ))}
          </>
        )}
      </Box>
    </>
  );
}
