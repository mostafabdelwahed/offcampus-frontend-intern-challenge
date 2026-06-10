"use client";

import { useState } from "react";
import OpportunityGrid from "./components/OpportunityGrid";
import FilterBar from "./components/FilterBar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  return <>
    <FilterBar returnSearchTerm={setSearchTerm} returnCategory={setCategory} />
    <OpportunityGrid />
  </>;
}
