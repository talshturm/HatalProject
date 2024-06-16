import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User);

 const getAllService = async () => {
    return await userRepository.find();
  };

const getByIdService = async (id: number) => {
    return await userRepository.findOneBy({id});
  };

  const getOrdersService = async (id: number) => {
    const user = await userRepository.findOne({ where: { id: id }, relations: ['orders', 'orders.products'] });
    if (!user) {
      throw new Error('User not found');
    }
    return user.orders;
  };

const createUserService = async (username: string, firstName: string,
     lastName: string, password: string, address: string, email: string) => {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.username = username;
    user.password = password;
    user.address = address;
    user.email = email;
    return await userRepository.save(user);
  };

const updateUserService = async (id: number, username: string, firstName: string,
    lastName: string, password: string, address: string, email: string) => {
    const user = await userRepository.findOneBy({ id });
    if (!user) throw new Error("User not found");
    
    user.firstName = firstName;
    user.lastName = lastName;
    user.username = username;
    user.password = password;
    user.address = address;
    user.email = email;
    return await userRepository.save(user);
  };

const deleteUserService = async (id: number) => {
    const user = await userRepository.findOneBy({ id });
    if (!user) throw new Error("User not found");
    await userRepository.remove(user);
  };

  export { deleteUserService, updateUserService, createUserService, getAllService, getByIdService, getOrdersService };
