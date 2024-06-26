import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { Product } from "./entities/product.entity";
import { Order } from "./entities/order.entity";
import { Feedback } from "./entities/feedback.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: false,
  logging: false,
  entities: [User, Product, Order, Feedback],
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
