const mockUndoList = {
  data: [{
    value: 'xieyan',
    status: 'div'
  }],
  success: true

}

export default {
  get(url){
    if(url === '/undolist.json'){
      return new Promise((resolve, reject) => {
        if(this.success){
          resolve(mockUndoList)
        }else{
          reject(new Error())
        }
      })
    }
  }
}