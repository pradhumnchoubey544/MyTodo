import { NextApiRequest, NextApiResponse } from "next";
import Item from "@/models/itemModel";
import { PostBody } from "@/app/types";
import { Task } from "@/app/types";

export async function getItems(req: NextApiRequest, res: NextApiResponse) {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch items" });
  }
}

export async function getItem(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { itemId } = _req.query;
    if (itemId) {
      const item = await Item.findById(itemId);
      return _res.status(200).json(item);
    }

    return _res.status(404).json({ error: "Cannot find User id" });
  } catch (error) {
    return _res.status(404).json({ error: "Unable to find this user" });
  }
}

export async function addItems(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { body } = _req;
    !body
      ? _res.status(404).json({ error: "Unable to create document" })
      : Item.create(body, (err: any, data: PostBody) =>
          _res.status(201).json(data)
        );
  } catch (error) {
    return _res.status(404).json(error);
  }
}

export async function putItem(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { itemId } = _req.query;
    const formData = _req.body;

    if (itemId && formData) {
      const item = await Item.findByIdAndUpdate(itemId, formData);
      return _res.status(200).json(item);
    }

    return _res.status(404).json({ error: "Item not found" });
  } catch (error) {
    return _res.status(404).json({ error: "Unable to update document" });
  }
}

export async function deleteItem(_req: NextApiRequest, _res: NextApiResponse) {
  try {
    const { itemId } = _req.query;
    if (itemId) {
      const deleted = await Item.findByIdAndDelete(itemId);
      return _res.status(200).json({ message: "Item deleted", deleted });
    }

    return _res.status(404).json({ error: "Item not found" });
  } catch (error) {
    return _res.status(404).json({ error: "Unble to delete document" });
  }
}
