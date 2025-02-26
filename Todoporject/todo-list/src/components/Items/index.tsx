"use client";

import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import Error from "../Error";
import Card from "../Card";
import Loading from "./loading";
import { useAppSelector } from "@/lib/hooks";
import Confirmation from "../Modals/Confirmation";

export default function Items({ filteredItems = [] }: { filteredItems: any[] }) {
  const deleteId = useAppSelector((state) => state.app.client.deletedItem);

  if (!filteredItems) return <Loading />;
  if (filteredItems.length === 0) return <Error message="No notes found" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
      {filteredItems.map((item, index) => (
        <motion.div
          key={item._id}
          variants={staggerContainer as any}
          initial="hidden"
          whileInView="show"
          className="max-w-[400px] w-full h-full grid place-items-center"
        >
          <Card title={item.title} body={item.body} id={item._id} status={item.status} index={index} />
        </motion.div>
      ))}

       <AnimatePresence>{deleteId && <Confirmation deleteId={deleteId} />}</AnimatePresence> 
    </div>
  );
}