"use client";

import { getItem, getItems, updateItem } from "@/lib/helper";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ActionType } from "../Inputs";
import { displayMessage } from "@/lib/alert";
import { useAppDispatch } from "@/lib/hooks";
import { toggleChangeAction } from "@/redux/reducer";
import { useEffect } from "react";

type Form = {
  title: string;
  body: string;
  status: string;
};

interface Props {
  formId: string;
  formData: Form;
  setFormData: React.Dispatch<ActionType>;
}

export default function UpdateItem({ formId, formData, setFormData }: Props) {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  // Fetch existing item data
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["hydrate-items", formId],
    queryFn: async () => await getItem(formId),
    enabled: !!formId, // Fetch only if formId exists
  });

  // Set form data when data is available
  useEffect(() => {
    if (data) {
      setFormData({ type: "textInput", payload: { key: "title", value: data?.title || "" } });
      setFormData({ type: "textInput", payload: { key: "body", value: data?.body || "" } });
      setFormData({ type: "textInput", payload: { key: "status", value: data?.status || "pending" } });
    }
  }, [data]);
  
  const updateMutation = useMutation({
    mutationFn: (newData: Form) => updateItem(formId, newData),
    onSuccess: async () => {
      await queryClient.invalidateQueries(["hydrate-items"]); 
      displayMessage("Task Updated!"); 
      dispatch(toggleChangeAction()); 
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.body) return; 
    updateMutation.mutate(formData);
  };

 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      type: "textInput",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading item: {error?.message}</p>;

  return (
    <form className="grid grid-cols-1 w-[400px] gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="title"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="body"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Note"
          value={formData.body}
          onChange={handleChange}
        />
      </div>
      <div className="input-type">
        <select
          name="status"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button
        type="submit"
        className="py-2 px-4 w-full bg-[#425a78] font-bold hover:bg-[#2e4765] flex justify-center border rounded-md text-gray-100"
      >
        Update
      </button>
    </form>
  );
}