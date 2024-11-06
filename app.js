//===============================================Задание №1============================================

//Массивы совмещают в себе следующие структуры данных:
// Стэк, 
// Очередь, 
// Двусторонняя очередь,
// Упорядоченный список.

//Массив в JavaSkript может хранить в себе данные разных типов и  позволяет динамический изменять длину массива. Т.е. является гетерогенным.

//===============================================Задание №2============================================


function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.apply(call);

logger.apply(obj);

const bounderLogger = logger.bind(obj);

//===============================================Задание №3.1============================================

const numberArr = [1,2,3,4,5];

numberArr.reduce((acc,item)=>{
    acc += item;
    return acc;
}, 0);


const stringArr = ['a','b','c','d'];

stringArr.join('');

function maxAndMinValue(arr){
    let min = arr[0];
    let max = arr[0];

    if(arr.length === 0){
        return 'Массив пуст';
    }else if(arr.length === 1){
        return `Min: ${arr[0]}, Max: ${arr[0]}`;
    }

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }else if(arr[i] < min){
            min = arr[i];
        }
    }

    return `Min: ${min}, Max: ${max}`;
}

//===============================================Задание №3.2============================================

let stackArr = [1,2,3,4,5,6,7]

stackArr.push(9);
stackArr.pop(stackArr.length - 1);

//===============================================Задание №3.3============================================

stackArr.push(10);
stackArr.shift()