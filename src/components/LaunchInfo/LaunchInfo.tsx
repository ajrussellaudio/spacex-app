import { Instructions } from "./Instructions";
import { LaunchDetails } from "./LaunchDetails";

type LaunchInfoProps = {
  id?: Launch["id"];
};

export function LaunchInfo({ id }: LaunchInfoProps) {
  return id ? <LaunchDetails id={id} /> : <Instructions />;
}
