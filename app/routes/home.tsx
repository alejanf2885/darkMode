import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import CardPerson from "~/components/cardPerson";
import ListCard from "~/components/listCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DarkMode" },
    { name: "description", content: "¡Practica de modo ocuro!" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-start justify-between  container mx-auto">
        <div className="w-1/3 p-4">
          <CardPerson />
        </div>
        <div className="w-2/3 p-4">
          <ListCard />
        </div>
      </div>
    </>
  );
}