import { Card, Typography } from "@mui/material";
import { useLaunchpad } from "../../hooks/useLaunchpad";
import { Loading } from "../Loading";

type LaunchpadDetailsProps = {
  id: Launch["launchpad"];
};

export function LaunchpadDetails({ id }: LaunchpadDetailsProps) {
  const { data, isLoading } = useLaunchpad(id);

  if (data && !isLoading) {
    return (
      <Card sx={{ m: 2, p: 1 }}>
        <Typography variant="subtitle1" gutterBottom>
          {data.full_name}
        </Typography>
        <Typography variant="body2" gutterBottom>
          ({data.name}) {data.locality}, {data.region}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.details}
        </Typography>
      </Card>
    );
  }

  return <Loading />;
}
