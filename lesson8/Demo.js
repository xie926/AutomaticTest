import axios from 'axios'
export const runCallBack = (callBack) => {
  callBack()
}

export const runCallBack2 = (callBack) => {
  callBack('abd')
}

export const createObject = (classItem) => {
  new classItem();
}

export const getData = () => {
  return axios.get('./api').then(res => res.data)
}

export const forEach = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}