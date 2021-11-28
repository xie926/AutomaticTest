import axios from 'axios';

export const fetchData = () => {
  return axios.get('/').then(res => res.data)
}

// {
//   data: "(function(){return '123'})()"
// }

export const getNumber = () => {
  return 123
}