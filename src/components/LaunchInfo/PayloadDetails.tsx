import { Card, Typography } from "@mui/material";
import { usePayload } from "../../hooks/usePayload";
import { Loading } from "../Loading";

type PayloadDetailsProps = {
  id: Launch["payloads"][0];
};

export function PayloadDetails({ id }: PayloadDetailsProps) {
  const { data, isLoading } = usePayload(id);

  if (data && !isLoading) {
    return (
      <Card sx={{ m: 2, p: 1 }}>
        <Typography variant="body1" gutterBottom>
          {data.name} ({data.type})
        </Typography>
      </Card>
    );
  }

  return <Loading />;
}
