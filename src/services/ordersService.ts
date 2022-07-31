import Iorders from '../interfaces/orders.interface';
import model from '../models/ordersModel';

const getAll = async (): Promise<Iorders[]> => {
  const result = await model.getAll();
  return result as Iorders[];
};

export default { getAll };