import express from 'express';
import httpErrorMiddleware from './middleware/http.erro.middleware';
import loginRouter from './routers/loginRouters';
import orderRouter from './routers/ordersRouters';
import router from './routers/productsRouters';
import userRouter from './routers/usersRouters';

const app = express(); 

app.use(express.json());

app.use('/products', router);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use(httpErrorMiddleware);

export default app;
