import { fetchData } from '../../api/data';

export const GET_DATA = 'GET_DATA';

export const getData = () => ({
  type: GET_DATA,
  payload: fetchData(),
});
