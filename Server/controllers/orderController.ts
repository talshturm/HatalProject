import { Request, Response } from "express";
import { getAllService, getByIdService, deleteOrderService, updateOrderService, createOrderService } from "../Services/orderService";
import { HttpStatus } from "http-status-ts";

const getAll = async (req: Request, res: Response) => {
    try {
        const orders = await getAllService();
        res.send(orders);
      } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
      }
};

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const order = await getByIdService(parseInt(id));
      if (order) {
        res.send(order);
      } else {
        res.status(HttpStatus.NOT_FOUND).send("Order not found");
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
  };

  const deleteOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await deleteOrderService(parseInt(id));
      res.status(HttpStatus.OK).json({message: 'Order deleted successfully'});
    } catch (error) {
      res.status(HttpStatus.CONFLICT).send("Order deletion failed");
    }
  };

  const updateOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
      await updateOrderService(parseInt(id), name, description, price);
      res.status(HttpStatus.OK).json({ message: 'Order updated successfully'});
    } catch (error) {
      res.status(HttpStatus.CONFLICT).send("Order update failed");
    }
  };

  const createOrder = async (req: Request, res: Response) => {
    const { name, description, price } = req.body;

    try {
       await createOrderService(name, description, price);
      res.status(HttpStatus.CREATED).json({ message: 'Order created successfully'});
    } catch (error) {
      res.status(HttpStatus.CONFLICT).send("Order creation failed");
    }
  };
  

export { getAll, getById, deleteOrder, updateOrder, createOrder };
