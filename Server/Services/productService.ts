import { Product } from "../entities/product.entity";
import { AppDataSource } from "../data-source";

const productRepository = AppDataSource.getRepository(Product);

 const getAllService = async () => {
    return await productRepository.find();
  };

const getByIdService = async (id: number) => {
    return await productRepository.findOneBy({ id });
  };

  export { getAllService, getByIdService };
