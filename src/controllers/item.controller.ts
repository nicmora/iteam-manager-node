import { Request, Response } from "express";
import { itemService } from "../services/item.service";
import { Item } from "../models/Item";

class ItemController {
  getAll = (req: Request, res: Response): Promise<Response<Item[]>> => {
    return itemService
      .findAll()
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  };

  getByName = (req: Request, res: Response): Promise<Response<Item>> => {
    return itemService
      .findByName(req.params.name)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  };

  create = (req: Request, res: Response): Promise<Response<Item>> => {
    return itemService
      .create(req.body)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  };

  updateByName = (req: Request, res: Response): Promise<Response<Item>> => {
    return itemService
      .updateByName(req.params.name, req.body)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  };

  deleteByName = (req: Request, res: Response): Promise<Response<void>> => {
    return itemService
      .deleteByName(req.params.name)
      .then(() => res.status(200))
      .catch((err) => res.status(500).send(err));
  };
}

export const itemController = new ItemController();
