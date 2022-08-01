import Ilogin from '../interfaces/login.interface';
import model from '../models/loginModel';

const checkLogin = async (data: Ilogin) => {
  const result = await model.checkLogin(data);
  return result;
};

export default { checkLogin };