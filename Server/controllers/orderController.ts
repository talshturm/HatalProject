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
    const { orderId } = req.params;
    const { userId, productIds, status } = req.body;

    try {
        await updateOrderService(parseInt(orderId), userId, productIds, status);
        res.status(HttpStatus.OK).json({ message: 'Order updated successfully' });
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
};

  const createOrder = async (req: Request, res: Response) => {
    const { userId, productIds, status } = req.body;

    try {
        const order = await createOrderService(userId, productIds, status);
        res.status(HttpStatus.CREATED).json({ message: 'Order created successfully'});
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
};
  

export { getAll, getById, deleteOrder, updateOrder, createOrder };
