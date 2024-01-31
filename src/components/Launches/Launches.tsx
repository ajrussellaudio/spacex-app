import { DataGrid, GridColDef, GridEventListener, gridDateComparator } from "@mui/x-data-grid";
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

export type LaunchesProps = {
  onSelect: (id: Launch["id"]) => void;
};

export function Launches({ onSelect }: LaunchesProps) {
  const { data, isLoading } = useLaunches();

  if (data && !isLoading) {
    const handleRowClick: GridEventListener<"rowClick"> = (params) => {
      onSelect(params.row.id);
    };

    return <DataGrid rows={data} columns={columns} onRowClick={handleRowClick} />;
  }

  return <Loading />;
}
