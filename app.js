//===============================================Задание №1============================================

let counter = {};

const COUNTER = new Object();

function Counter(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}

let counterTwo = Object.create({}, {
    conter: 1,
})

let newCounterObject = Object.assign({}, counterTwo)

//===============================================Задание №2============================================

let copyCounter = Object.assign({}, counter);

let counterJSON = JSON.parse(JSON.stringify(Counter));

let conterSpread = {...Counter}

//Можно исопльзовать библиотеку lodash

//===============================================Задание №3============================================

function makeCounterFirst(){};

let makeCounterSecond = function(){};

let makeCounterThreed = ()=>{};

let makeCounterFourth = new makeCounterSecond();

//===============================================Задание №4============================================

// structuredClone() — это функция в JavaScript для глубокого копирования массивов или объектов. Она создаёт новый объект, который имеет те же свойства, что и исходный объект, и все свойства, которые являются объектами, также клонируются.

// Функция поддерживает клонирование всех типов данных, включая функции и регулярные выражения. Однако она не поддерживается всеми браузерами.

//===============================================Бонус Задание №1============================================
const obj1 = { 
        here: { 
            is:"on", 
            other: "3" 
        },
        object: "Y"
    };
    
    const obj2 = { 
        here: { 
            is:"on", 
            other: "2" 
        }, 
        object: "Y" 
    };
    
    const deepEqual = (obj1, obj2) => {

            const objKeys1 = Object.keys(obj1);
            const objKeys2 = Object.keys(obj2);
        
            if (objKeys1.length !== objKeys2.length) return false;
            
            for (let key of objKeys1) {
                const value1 = object1[key];
                const value2 = object2[key];
                
                const isObjects = isObject(value1) && isObject(value2);
            
                if ((isObjects && !deepEqual(value1, value2)) ||
                    (!isObjects && value1 !== value2)
                ) {
                    return false;
                }
            }
                
            return true;
        };
      
            const isObject = (object) => {
            return object != null && typeof object === "object";
    };

    //===============================================Бонус Задание №2============================================

    function reverseStr(str) {
        return str.split("").reverse().join('')
      }