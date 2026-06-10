"use client";

import { useState } from "react";
import OpportunityGrid from "./components/OpportunityGrid";
import FilterBar from "./components/FilterBar";
import { Opportunity, MOCK_DATA } from "./data/opportunities";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredOpportunities = MOCK_DATA.filter((opportunity) => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) || opportunity.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || opportunity.category === category;
    return matchesSearch && matchesCategory;
  });

  return <>
    <FilterBar returnSearchTerm={setSearchTerm} returnCategory={setCategory} />
    <OpportunityGrid opportunities={filteredOpportunities} />
  </>;
}
