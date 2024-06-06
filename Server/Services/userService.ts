import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User);

 const getAllService = async () => {
    return await userRepository.find();
  };

const getByIdService = async (id: number) => {
    return await userRepository.findOneBy({ id });
  };

const createUserService = async (firstName: string, lastName: string) => {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    return await userRepository.save(user);
  };

const updateUserService = async (id: number, firstName: string, lastName: string) => {
    const user = await userRepository.findOneBy({ id });
    if (!user) throw new Error("User not found");
    
    user.firstName = firstName;
    user.lastName = lastName;
    return await userRepository.save(user);
  };

const deleteUserService = async (id: number) => {
    const user = await userRepository.findOneBy({ id });
    if (!user) throw new Error("User not found");
    await userRepository.remove(user);
  };

  export { deleteUserService, updateUserService, createUserService, getAllService, getByIdService };
