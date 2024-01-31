type PayloadDetailsProps = {
  id: Launch["payloads"][0];
};

export function PayloadDetails({ id }: PayloadDetailsProps) {
  return <div>I am a PayloadDetails component for ID {id}</div>;
}
