"use client";

import { useState } from "react";
import OpportunityGrid from "./components/OpportunityGrid";
import SearchBar from "./components/SearchBar";



export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return <>
    <SearchBar setSearchTerm={setSearchTerm} />
    <OpportunityGrid />
  </>;
}
