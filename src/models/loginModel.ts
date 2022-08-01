import Ilogin from '../interfaces/login.interface';
import IloginReturn from '../interfaces/loginReturn.interface';
import connection from './connection';

const checkLogin = async (data: Ilogin): Promise<IloginReturn[]> => {
  const { username, password } = data;
  const query = `SELECT JSON_ARRAYAGG(id) AS id  FROM Trybesmith.Users 
  WHERE username=? AND password=?`;
  const [result] = await connection.execute(query, [username, password]);
  console.log('RESULT NO MODEL', result);
  //   if (result === null) return 'Error';
  //   return { id: result, username };
  return result as IloginReturn[];
};

export default { checkLogin };