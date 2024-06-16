import { Order } from "../entities/order.entity";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { Product } from "../entities/product.entity";
import { OrderStatus } from "../entities/orderStatus";
import { logger } from "../middlewares/LoggerMiddleware";

const orderRepository = AppDataSource.getRepository(Order);


 const getAllService = async () => {
        const orders = await orderRepository.find({
            relations: ['products'] 
        });

        logger.info(`getting ${orders.length} orders`);
        return orders;
  };

  const getByIdService = async (orderId: number): Promise<Order> => {
    logger.info(`getting order with id: ${orderId}`);

    const order = await orderRepository.findOne({
        where: { id: orderId },
        relations: ['products'] 
    });

    if (!order) {
        logger.error(`getting order with id: ${orderId} failed`);
        throw new Error(`Order with ID ${orderId} not found`);
    }

    logger.info(`success trying to fetch order with id: ${orderId}`);
    return order;
};

const createOrderService = async (userId: number, productIds: number[], status: OrderStatus, orderDate: Date): Promise<Order> => {
    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
        logger.error(`cannot find user with id: ${userId}`);
        throw new Error(`User with ID ${userId} not found`);
    }

    const products = await productRepository.find({
        where: productIds.map(id => ({ id }))
    });
    if (products.length !== productIds.length) {
        logger.error('One or more products not found');
        throw new Error('One or more products not found');
    }

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    const order = new Order();
    order.user = user;
    order.products = products;
    order.totalPrice = totalPrice;
    order.status = status;
    order.orderDate = orderDate;

    console.log(order);

    logger.info('order created');
    return await orderRepository.save(order);
};

const updateOrderService = async (orderId: number, userId: number, productIds: number[], status: OrderStatus, orderDate: Date): Promise<Order> => {
    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);
    logger.info(`trying to update order with id ${orderId}`);

    const order = await orderRepository.findOne({ where: { id: orderId }, relations: ["user", "products"] });
    if (!order) {
        logger.error(`Order with ID ${orderId} not found`);
        throw new Error(`Order with ID ${orderId} not found`);
    }

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
        logger.error(`User with ID ${userId} not found`);
        throw new Error(`User with ID ${userId} not found`);
    }

    const products = await productRepository.find({
        where: productIds.map(id => ({ id }))
    });
    if (products.length !== productIds.length) {
        logger.error('One or more products not found');
        throw new Error('One or more products not found');
    }

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    order.user = user;
    order.products = products;
    order.totalPrice = totalPrice;
    order.status = status;
    order.orderDate = orderDate;

    logger.info(`order with id ${orderId} updated`);

    return await orderRepository.save(order);
};

const deleteOrderService = async (id: number): Promise<void> => {
    logger.info(`trying to delete order with id ${id}`);
   const order = await orderRepository.findOneBy({ id });
   if (!order){
    logger.error(`Order with ID ${id} not found`);
    throw new Error(`Order with ID ${id} not found`);
   } 
   await orderRepository.remove(order);
   logger.info(`order with id ${id} deleted`);
 };

 const updateStatusService = async (id: number, status: OrderStatus): Promise<Order> => {
    const order = await orderRepository.findOneBy({ id });
    logger.info(`trying to update status for order with id ${id} to status: ${status}`);

    if (!order) {
        logger.error(`Order with ID ${id} not found`);
        throw new Error(`Order with ID ${id} not found`);
    }

    order.status = status;
    logger.info(`update status for order with id ${id} succeeded`);
    return await orderRepository.save(order);
};


  export { getAllService, getByIdService, deleteOrderService, updateOrderService, createOrderService, updateStatusService };
