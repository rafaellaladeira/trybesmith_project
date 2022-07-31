import express from 'express';
import orderRouter from './routers/ordersRouters';
import router from './routers/productsRouters';
import userRouter from './routers/usersRouters';

const app = express(); 

app.use(express.json());

app.use('/products', router);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
