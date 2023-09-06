import { Item, ItemSchema } from "../models/Item";

class ItemService {
  findAll = async (): Promise<Item[]> => {
    return await ItemSchema.find();
  };

  findByName = async (name: string): Promise<Item | null> => {
    return await ItemSchema.findOne({ name: name });
  };

  create = async (newItem: Item): Promise<Item> => {
    return await ItemSchema.validate(newItem)
      .then(() =>
        ItemSchema.create(newItem)
          .then((result) => result)
          .catch((err) => err)
      )
      .catch((err) => err);
  };

  updateByName = async (name: string, data: Item): Promise<Item> => {
    return await ItemSchema.findOneAndUpdate(
      { name: name },
      { name: data.name, price: data.price },
      { new: true }
    )
      .then((result) => result)
      .catch((err) => err);
  };

  deleteByName = async (name: string): Promise<void> => {
    return await ItemSchema.findOneAndDelete({ name: name })
      .then((result) => result)
      .catch((err) => err);
  };
}

export const itemService = new ItemService();
