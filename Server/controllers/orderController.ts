import { Request, Response } from "express";
import { getAllService, getByIdService, deleteOrderService, updateOrderService, createOrderService } from "../Services/orderService";
import { StatusCodes } from "http-status-codes";

const getAll = async (req: Request, res: Response) => {
    try {
        const orders = await getAllService();
        res.send(orders);
      } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
      }
};

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const order = await getByIdService(parseInt(id));
      if (order) {
        res.send(order);
      } else {
        res.status(StatusCodes.NOT_FOUND).send("Order not found");
      }
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
  };

  const deleteOrder = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await deleteOrderService(parseInt(id));
      res.status(StatusCodes.OK).json({message: 'Order deleted successfully'});
    } catch (error) {
      res.status(StatusCodes.CONFLICT).send("Order deletion failed");
    }
  };

  const updateOrder = async (req: Request, res: Response) => {
    const { orderId } = req.params;
    const { userId, productIds, status, orderDate } = req.body;

    try {
        await updateOrderService(parseInt(orderId), userId, productIds, status, new Date(orderDate));
        res.status(StatusCodes.OK).json({ message: 'Order updated successfully' });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
};

  const createOrder = async (req: Request, res: Response) => {
    const { userId, productIds, status, orderDate } = req.body;

    try {
        await createOrderService(userId, productIds, status, new Date(orderDate));
        res.status(StatusCodes.CREATED).json({ message: 'Order created successfully'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
};
  

export { getAll, getById, deleteOrder, updateOrder, createOrder };
