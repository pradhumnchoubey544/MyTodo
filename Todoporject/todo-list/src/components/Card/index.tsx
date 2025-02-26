
"use client";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "@/redux/reducer";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { CardProps } from "@/app/types";

export default function Card({ title, body, id, status }: CardProps) {
  const stateVisible = useAppSelector((state) => state.app.client.toggleForm);
  const dispatch = useAppDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(id));
    if (stateVisible) {
      dispatch(updateAction(id));
    }
  };

  const onDelete = () => {
    if (!stateVisible) {
      dispatch(deleteAction(id));
    }
  };

  const statusStyles: Record<string, { color: string; label: string }> = {
    pending: { color: "bg-yellow-500", label: "⏳ Pending" },
    inProgress: { color: "bg-blue-500", label: "🚀 In Progress" },
    done: { color: "bg-green-500", label: "✅ Done" },
  };

  return (
    <motion.div
      variants={zoomIn(0.5, 0.8)}
      className="max-w-[350px] w-full px-5 py-4 rounded-lg flex flex-col justify-between bg-white shadow-md border border-gray-200">
      
      
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{body}</p>
      </div>

     
      <div className="flex justify-between items-center mt-4">
       
        <div className="flex gap-3">
          <MdDelete
            size={22}
            className="cursor-pointer text-red-500 hover:text-red-700"
            onClick={onDelete}
          />
          <MdEditSquare
            size={22}
            className="cursor-pointer text-blue-500 hover:text-blue-700"
            onClick={onUpdate}
          />
        </div>
      
        
        <span
          className={`px-3 py-1 text-sm font-medium text-white rounded-full ${
            statusStyles[status]?.color || "bg-gray-500"
          }`}
        >
           {statusStyles[status]?.label || "❓ Unknown"} 
        </span>
      </div>
    </motion.div>
  );
}

