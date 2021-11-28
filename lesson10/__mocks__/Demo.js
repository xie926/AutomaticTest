export const fetchData = () => {
  return new Promise((resolved, rejected) => {
    resolved("(function(){return '123'})()")
    // resolved({
    //   data: "(function(){return '123'})()"
    // })
  })
}