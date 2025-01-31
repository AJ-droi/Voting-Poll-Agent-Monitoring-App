"use client"

import Analytics from "@/components/ui/Analytics";
import Filter from "@/components/ui/Filter";
import Search from "@/components/ui/Search";
import Table from "@/components/ui/Table";
import React from "react";





const Page = () => {
  return (
    <div>
      {/* Grid Section */}
    <Analytics />

       <Search />
      <Filter
          options={["id", "date", "title", "price"]}
          selectedOption={"id"}
          onFilterChange={(option) => console.log(option)}
        />
      {/* Table Section */}
     <Table />
    </div>
  );
};

export default Page;

