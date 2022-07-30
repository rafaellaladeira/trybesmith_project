import IaddUser from '../interfaces/addUsers.interface';
import model from '../models/usersModel';

const addUser = async (body: IaddUser) => {
  const result = await model.addUser(body);
  return result;
};

export default { addUser };