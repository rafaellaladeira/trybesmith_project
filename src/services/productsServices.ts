import Iproducts from '../interfaces/addProducts.interface';
import model from '../models/productsModel';

const addProducts = async (body: Iproducts): Promise<Iproducts> => {
  const result = await model.addProducts(body);
  return result;
};

const getAll = async (): Promise<Iproducts[]> => {
  const result = await model.getAll();
  return result as Iproducts[];
};

export default { addProducts, getAll };