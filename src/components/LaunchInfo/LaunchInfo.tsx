import { useLaunch } from "../../hooks/useLaunch";
import { Loading } from "../Loading";
import { LaunchDetails } from "./LaunchDetails";

type LaunchDetailsProps = {
  id: Launch["id"];
};

export function LaunchInfo({ id }: LaunchDetailsProps) {
  const { data, isLoading } = useLaunch(id);

  if (data && !isLoading) {
    return (
      <>
        <LaunchDetails {...data} />
      </>
    );
  }

  return <Loading />;
}
