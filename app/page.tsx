"use client";

import { useState } from "react";
import OpportunityGrid from "./components/OpportunityGrid";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  return <>
    <SearchBar setSearchTerm={setSearchTerm} />
    <CategoryFilter returnCategory={setCategory} />
    <OpportunityGrid />
  </>;
}
