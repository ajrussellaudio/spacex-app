import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Launches } from "./components/Launches";
import { Grid } from "@mui/material";
import { useState } from "react";
import { LaunchInfo } from "./components/LaunchInfo";

const queryClient = new QueryClient();

function App() {
  const [selectedLaunchID, setSelectedLaunchID] = useState<Launch["id"]>();

  return (
    <QueryClientProvider client={queryClient}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Launches onSelect={setSelectedLaunchID} />
        </Grid>
        <Grid item xs={8}>
          <LaunchInfo id={selectedLaunchID} />
        </Grid>
      </Grid>
    </QueryClientProvider>
  );
}

export default App;
