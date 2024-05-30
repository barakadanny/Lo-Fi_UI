import React from "react";
import RentalTools from "../components/RentalTools";
import MissingItems from "../components/MissingItems";
import RestockItems from "../components/RestockItems";

interface Task {
  tooRef: number;
  name: string;
  status: "completed" | "in progress" | "not started";
  duration: string;
}

export default function Home() {
  return (
    <div>
      <RentalTools />
      <MissingItems />
      <RestockItems />
    </div>
  );
}
