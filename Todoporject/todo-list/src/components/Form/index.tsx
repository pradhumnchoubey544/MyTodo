"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText } from "@/components/CustomTexts";
import styles from "@/styles";
import Inputs from "../Inputs";
import { toggleChangeAction } from "@/redux/reducer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState, useEffect } from "react";


interface Note {
  _id: string;
  title: string;
  priority: string;
  dueDate: string; 
  status: string;
}

interface FormProps {
  items: Note[]; 
  setFilteredItems: (items: Note[]) => void; 
  isLoading: boolean;
  
}

export default function Form({ items, setFilteredItems, isLoading }: FormProps) {
  const dispatch = useAppDispatch();
  const visible = useAppSelector((state) => state.app.client.toggleForm);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    if (!items) return;

    let filteredData = [...items];

   
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

   
    if (sortBy === "priority") {
      filteredData.sort((a, b) => a.priority.localeCompare(b.priority));
    } else if (sortBy === "dueDate") {
      filteredData.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
    }
    setFilteredItems(filteredData);
  }, [searchQuery, sortBy, items, setFilteredItems]);
  return (
    <motion.div
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto flex flex-col gap-4`}
    >
      <TitleText
        title={isLoading ? "Loading Notes..." : `Notes - ${items?.length || 0}`}
        textStyles="text-center text-gray-400"
      />

   
      <motion.input
        variants={fadeIn("up", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        type="text"
        placeholder="Search notes..."
        className="p-2 border border-gray-400 rounded-md w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

  
      <motion.select
        variants={fadeIn("up", "spring", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        className="p-2 border border-gray-400 rounded-md w-full"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="priority">Priority</option>
        <option value="dueDate">Due Date</option>
      </motion.select>

     
      <motion.button
        onClick={() => dispatch(toggleChangeAction())}
        className="py-2 px-5 bg-green-500 hover:bg-blue-600 text-white font-bold rounded-md"
      >
        + New Note
      </motion.button>

      {visible ? <Inputs /> : null}
    </motion.div>
  );
}