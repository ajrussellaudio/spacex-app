import { DataGrid, GridColDef, gridDateComparator } from "@mui/x-data-grid";
import { useLaunches } from "../../hooks/useLaunches";
import { Loading } from "../Loading";
import { prettyDate } from "../../lib/prettyDate";

const columns: GridColDef<Launch>[] = [
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "date_utc",
    headerName: "Date",
    width: 200,
    valueFormatter: (params) => prettyDate(params.value),
    sortComparator: gridDateComparator,
  },
];

export function Launches() {
  const { data, isLoading } = useLaunches();

  if (data && !isLoading) {
    return <DataGrid rows={data} columns={columns} />;
  }

  return <Loading />;
}
