import { Order } from "../entities/order.entity";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { Product } from "../entities/product.entity";
import { OrderStatus } from "../entities/orderStatus";

const orderRepository = AppDataSource.getRepository(Order);


 const getAllService = async () => {
        const orders = await orderRepository.find({
            relations: ['products'] 
        });

        return orders;
  };

  const getByIdService = async (orderId: number): Promise<Order> => {
    const order = await orderRepository.findOne({
        where: { id: orderId },
        relations: ['products'] 
    });

    if (!order) {
        throw new Error(`Order with ID ${orderId} not found`);
    }

    return order;
};

const createOrderService = async (userId: number, productIds: number[], status: OrderStatus, orderDate: Date): Promise<Order> => {
    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
        throw new Error(`User with ID ${userId} not found`);
    }

    const products = await productRepository.find({
        where: productIds.map(id => ({ id }))
    });
    if (products.length !== productIds.length) {
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

    return await orderRepository.save(order);
};

const updateOrderService = async (orderId: number, userId: number, productIds: number[], status: OrderStatus, orderDate: Date): Promise<Order> => {
    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);

    const order = await orderRepository.findOne({ where: { id: orderId }, relations: ["user", "products"] });
    if (!order) {
        throw new Error(`Order with ID ${orderId} not found`);
    }

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
        throw new Error(`User with ID ${userId} not found`);
    }

    const products = await productRepository.find({
        where: productIds.map(id => ({ id }))
    });
    if (products.length !== productIds.length) {
        throw new Error('One or more products not found');
    }

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    order.user = user;
    order.products = products;
    order.totalPrice = totalPrice;
    order.status = status;
    order.orderDate = orderDate;

    return await orderRepository.save(order);
};

const deleteOrderService = async (id: number): Promise<void> => {
   const order = await orderRepository.findOneBy({ id });
   if (!order){
    throw new Error(`Order with ID ${id} not found`);
   } 
   await orderRepository.remove(order);
 };

 const updateStatusService = async (id: number, status: OrderStatus): Promise<Order> => {
    const order = await orderRepository.findOneBy({ id });

    if (!order) {
        throw new Error(`Order with ID ${id} not found`);
    }

    order.status = status;
    return await orderRepository.save(order);
};


  export { getAllService, getByIdService, deleteOrderService, updateOrderService, createOrderService, updateStatusService };
