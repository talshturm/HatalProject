import { Request, Response } from "express";
import { getAllService, getByIdService } from "../Services/productService";

const getAll = async (req: Request, res: Response) => {
    try {
        const products = await getAllService();
        res.send(products);
      } catch (error) {
        res.status(500).send("Internal server error");
      }
  };

const getById = async (req: Request, res: Response) => {
    const id = Number(req.params);
    try {
      const product = await getByIdService(id);
      if (product) {
        res.send(product);
      } else {
        res.status(404).send("Product not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

export { getAll, getById };
