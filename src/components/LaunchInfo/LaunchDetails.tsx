type LaunchDetailsProps = {
  id: Launch["id"];
};

export function LaunchDetails({ id }: LaunchDetailsProps) {
  return <div>I am a LaunchDetails component for {id}</div>;
}
