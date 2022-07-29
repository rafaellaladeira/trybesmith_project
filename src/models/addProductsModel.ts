import { number } from 'joi';
import { ResultSetHeader } from 'mysql2';
import Iproducts from '../interfaces/addProducts.interface';
import connection from './connection';

const addProducts = async (body: Iproducts) => {
  const { name, amount } = body;
  const query = 'INSERT INTO Trybesmith.Products (name, amount)VALUES (?,?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  
  return { 
    id: result.insertId,
    name,
    amount,
  };
};

export default { addProducts };