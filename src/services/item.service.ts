import { Item, ItemSchema } from "../models/Item";

class ItemService {
  findAll = (): Promise<Item[]> => {
    return ItemSchema.find();
  };

  findByName = (name: string): Promise<Item | null> => {
    return ItemSchema.findOne({ name: name });
  };

  create = (newItem: Item): Promise<Item> => {
    return ItemSchema.validate(newItem)
      .then(() =>
        ItemSchema.create(newItem)
          .then((result) => result)
          .catch((err) => err)
      )
      .catch((err) => err);
  };

  updateByName = (name: string, data: Item): Promise<Item> => {
    return ItemSchema.findOneAndUpdate(
      { name: name },
      { name: data.name, price: data.price },
      { new: true }
    )
      .then((result) => result)
      .catch((err) => err);
  };

  deleteByName = (name: string): Promise<void> => {
    return ItemSchema.findOneAndDelete({ name: name })
      .then((result) => result)
      .catch((err) => err);
  };
}

export const itemService = new ItemService();
