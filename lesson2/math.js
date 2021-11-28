function add(a, b){
    return a + b
}

function minus(a, b){
    return a - b
}

function multi(a, b){
    return a * b
}

try{
    module.export = { // node语法，index.html无法识别，所以在打开html文件时，回报异常
        add,
        minus,
        multi
    }
}catch(e){}

// 使用try...catch是因为在浏览器打开index.html时会报错
// 而运行在node环境，不会报错