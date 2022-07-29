import Iproducts from '../interfaces/addProducts.interface';
import model from '../models/addProductsModel';

const addProducts = async (body: Iproducts): Promise<Iproducts> => {
  const result = await model.addProducts(body);
  return result;
};

export default { addProducts };