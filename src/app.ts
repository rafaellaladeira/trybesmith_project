import express from 'express';
import router from './routers/productsRouters';
import userRouter from './routers/usersRouters';

const app = express(); 

app.use(express.json());

app.use('/products', router);
app.use('/users', userRouter);

export default app;
