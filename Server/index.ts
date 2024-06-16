import express from 'express';
import userRoutes from "./routers/userRouter";
import orderRoutes from "./routers/orderRouter";
import productRoutes from "./routers/productRouter";
import loginRoutes from "./routers/authRouter";
import feedbackRoutes from "./routers/feedbackRouter";
import cors from 'cors';
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/login", loginRoutes);
app.use("/feedbacks", feedbackRoutes);

app.listen(PORT,() => {
    console.log(`The application is listening on port:${PORT}`);
})