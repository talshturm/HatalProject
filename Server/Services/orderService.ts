import { Order } from "../entities/order.entity";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { Product } from "../entities/product.entity";

const orderRepository = AppDataSource.getRepository(Order);


 const getAllService = async () => {
    return await orderRepository.find();
  };

const getByIdService = async (id: number) => {
    return await orderRepository.findOneBy({ id });
  };

const createOrderService = async (userId: number, productIds: number[], status: string): Promise<Order> => {
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

    return await orderRepository.save(order);
};

const updateOrderService = async (orderId: number, userId: number, productIds: number[], status: string): Promise<Order> => {
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

    return await orderRepository.save(order);
};

const deleteOrderService = async (id: number) => {
   const order = await orderRepository.findOneBy({ id });
   if (!order) throw new Error("Order not found");
   await orderRepository.remove(order);
 };


  export { getAllService, getByIdService, deleteOrderService, updateOrderService, createOrderService };
