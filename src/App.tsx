import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Launches } from "./components/Launches";
import { Grid } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Launches />
        </Grid>
        <Grid item xs={8}>
          <div>🚧 Launch info 🚧</div>
        </Grid>
      </Grid>
    </QueryClientProvider>
  );
}

export default App;
