import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { Product } from "./entities/product.entity";
import { Order } from "./entities/order.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: false,
  logging: true,
  entities: [User, Product, Order],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
