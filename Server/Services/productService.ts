import { Product } from "../entities/product.entity";
import { AppDataSource } from "../data-source";

const productRepository = AppDataSource.getRepository(Product);

 const getAllService = async () => {
    return await productRepository.find();
  };

const getByIdService = async (id: number) => {
    return await productRepository.findOneBy({ id });
  };

  const createProductService = async (name: string, description: string, price: number, image: string) => {
   const product = new Product();
   product.name = name;
   product.description = description;
   product.price = price;
   product.image = image;
   return await productRepository.save(product);
 };

const updateProductService = async (id: number, name: string, description: string, price: number, image: string) => {
   const product = await productRepository.findOneBy({ id });
   if (!product) throw new Error("User not found");
   
   product.name = name;
   product.description = description;
   product.price = price;
   product.image = image;
   return await productRepository.save(product);
 };

const deleteProductService = async (id: number) => {
   const product = await productRepository.findOneBy({ id });
   if (!product) throw new Error("Product not found");
   await productRepository.remove(product);
 };


  export { getAllService, getByIdService, deleteProductService, updateProductService, createProductService };
