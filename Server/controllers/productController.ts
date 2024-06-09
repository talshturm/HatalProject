import { Request, Response } from "express";
import { getAllService, getByIdService, deleteProductService, updateProductService, createProductService } from "../Services/productService";
import { HttpStatus } from "http-status-ts";

const getAll = async (req: Request, res: Response) => {
    try {
        const products = await getAllService();
        res.send(products);
      } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
      }
};

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const product = await getByIdService(parseInt(id));
      if (product) {
        res.send(product);
      } else {
        res.status(HttpStatus.NOT_FOUND).send("Product not found");
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
  };

  const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await deleteProductService(parseInt(id));
      res.status(HttpStatus.OK).json({message: 'Product deleted successfully'});
    } catch (error) {
      res.status(HttpStatus.CONFLICT).send("Product deletion failed");
    }
  };

  const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
      await updateProductService(parseInt(id), name, description, price);
      res.status(HttpStatus.OK).json({ message: 'Product updated successfully'});
    } catch (error) {
      res.status(HttpStatus.CONFLICT).send("Product update failed");
    }
  };

  const createProduct = async (req: Request, res: Response) => {
    const { name, description, price } = req.body;

    try {
       await createProductService(name, description, price);
      res.status(HttpStatus.CREATED).json({ message: 'Product created successfully'});
    } catch (error) {
      res.status(HttpStatus.CONFLICT).send("Product creation failed");
    }
  };
  

export { getAll, getById, deleteProduct, updateProduct, createProduct };
