"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import Items from "@/components/Items";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/lib/helper";

export default function Home() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["hydrate-items"],
    queryFn: getItems,
    onSuccess: (fetchedData) => {
      setFilteredItems(fetchedData);
    },
  });
  
  const [filteredItems, setFilteredItems] = useState<any[]>(data || []);
  return (
    <div className="bg-primary-gray h-screen overflow-y-scroll scrollbar-none">
      <NavBar />
      <div className="flex flex-col md:flex-row w-full h-full p-4">
        <div className="w-full md:w-[25%]  p-4 flex flex-col gap-4">
          <Form items={data} setFilteredItems={setFilteredItems} isLoading={isLoading} />
        </div>
        <div className="w-full md:w-[75%]  p-4">
          <Items filteredItems={filteredItems} />
        </div>
      </div>
    </div>
  );
}