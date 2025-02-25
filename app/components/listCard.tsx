import CardText from "./cardText";

export default function ListCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CardText />
      <CardText />
      <CardText />
      <CardText />
    </div>
  );
}