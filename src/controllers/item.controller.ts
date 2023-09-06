import { Request, Response } from "express";
import { itemService } from "../services/item.service";
import { Item } from "../models/Item";

class ItemController {
  getAll = async (req: Request, res: Response): Promise<Response<Item[]>> => {
    return await itemService
      .findAll()
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  };

  getByName = async (req: Request, res: Response): Promise<Response<Item>> => {
    return await itemService
      .findByName(req.params.name)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  };

  create = async (req: Request, res: Response): Promise<Response<Item>> => {
    return await itemService
      .create(req.body)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  };

  updateByName = async (
    req: Request,
    res: Response
  ): Promise<Response<Item>> => {
    return await itemService
      .updateByName(req.params.name, req.body)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  };

  deleteByName = async (
    req: Request,
    res: Response
  ): Promise<Response<void>> => {
    return await itemService
      .deleteByName(req.params.name)
      .then(() => res.status(200).send())
      .catch((err) => res.status(500).send(err));
  };
}

export const itemController = new ItemController();
