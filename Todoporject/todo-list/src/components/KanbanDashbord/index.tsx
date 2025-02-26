"use client";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Card from "../Card";
import { ItemTypes } from "@/utils/motion";

const statuses = ["pending", "inProgress", "done"];

export default function KanbanBoard({ items }: { items: any[] }) {
  const [tasks, setTasks] = useState(items);

  const moveTask = (taskId: string, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="flex gap-6 w-full overflow-auto p-6">
      {statuses.map((status) => (
        <KanbanColumn key={status} status={status} tasks={tasks} moveTask={moveTask} />
      ))}
    </div>
  );
}

function KanbanColumn({ status, tasks, moveTask }: any) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: any) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`w-1/3 min-h-[400px] p-4 rounded-md border ${
        isOver ? "bg-gray-100" : "bg-gray-50"
      }`}
    >
      <h2 className="text-lg font-bold mb-4 text-center capitalize">
        {status.replace("inProgress", "In Progress")}
      </h2>
      <div className="flex flex-col gap-4">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <Card key={task._id} {...task} />
          ))}
      </div>
    </div>
  );
}