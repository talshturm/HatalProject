import express from 'express';
import userRoutes from "./routers/userRouter";

const app = express();
const PORT = 3000;

app.use("/users", userRoutes);

app.listen(PORT,() => {
    console.log(`The application is listening on port:${PORT}`);
})