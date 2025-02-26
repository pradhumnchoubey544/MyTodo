import { NextApiRequest, NextApiResponse } from "next";
import { getItems, addItems, putItem, deleteItem } from "@/utils/controllers";
import connectDB from "@/utils/connectDB";

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    await connectDB();

    const { method } = _req;

    switch (method) {
      case "GET":
        return await getItems(_req, _res); 
      case "POST":
        return await addItems(_req, _res);
      case "PUT":
        return await putItem(_req, _res);
      case "DELETE":
        return await deleteItem(_req, _res);
      default:
        _res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        return _res.status(405).end(`Method ${method} not allowed`);
    }
  } catch (error) {
    console.error("API Error:", error);
    return _res.status(500).json({ error: "Internal Server Error" });
  }
}