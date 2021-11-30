import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp);
  }
}

export default Users;