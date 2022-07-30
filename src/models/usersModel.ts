import { ResultSetHeader } from 'mysql2';
import IaddUser from '../interfaces/addUsers.interface';
import connection from './connection';

const addUser = async (body:IaddUser) => {
  const { username, classe, level, password } = body;
  const query = `INSERT INTO 
    Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)`;
  const [data] = await connection.execute<ResultSetHeader>(
    query, 
    [username, classe, level, password],
  );
  return data;
};

export default { addUser };