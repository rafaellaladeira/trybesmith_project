import Iorders from '../interfaces/orders.interface';
import connection from './connection';

const getAll = async (): Promise<Iorders[]> => {
  const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.Orders as o
  INNER JOIN Trybesmith.Products AS p
  ON o.id = p.orderId
  GROUP BY o.id
  ORDER BY o.userId`;
  const [result] = await connection.execute(query);
  return result as Iorders[];
};

export default { getAll };