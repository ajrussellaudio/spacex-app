type CoreDetailsProps = {
  id: Launch["cores"][0]["core"];
};

export function CoreDetails({ id }: CoreDetailsProps) {
  return <div>I am a CoreDetails component for ID {id}</div>;
}
