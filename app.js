//===================================================Задание №1==============================
let promiseTwo = new Promise((resolve, reject) => {
    resolve("a"); // зарезолвит промис со значением 'a'
  });
  
  promiseTwo
    .then((res) => { // res = 'a'
      return res + "b"; // вернёт промис со значением 'ab'
    })
    .then((res) => { // res = 'ab'
      return res + "с"; // вернёт промис со значением 'abc'
    })
    .finally((res) => { // res = undefined
      return res + "!!!!!!!"; // ничего не вернёт
    })
    .catch((res) => { // пропустит этот блок
      return res + "d";
    })
    .then((res) => { // res = 'abc'
      console.log(res); // выведет в консоль 'abc', вернёт промис со значением undefined
    });
  
  // порядок вывода в консоль:
  // 1) 'abc'


//===================================================Задание №2==============================

  function doSmth() {
    return Promise.resolve("123");
  }
  
  doSmth() // вернёт зарезолвенный промис со значением '123'
    .then(function (a) { // a = '123'
      console.log("1", a); // выведет в консоль '1 123'
      return a; // вернёт промис со значением '123'
    })
    .then(function (b) { // b = '123'
      console.log("2", b); // выведет в консоль '2 123'
      return Promise.reject("321"); // отклонит промис со значением '321'
    })
    .catch(function (err) { // err = '321'
      console.log("3", err); // выведет в консоль '3 321', вернёт промис со значением undefined
    })
    .then(function (c) { // c = undefined
      console.log("4", c); // выведет в консоль '4 undefined'
      return c; // вернёт промис со значением 'undefined'
    });
  
  // порядок вывода в консоль: 
  // 1) '1 123'
  // 2) '2 123'
  // 3) '3 321'
  // 4) '4 undefined'

  //===================================================Задание №2==============================

  function showOutpu(arr) {
    arr.forEach((item, index) => {
      setTimeout(() => console.log(index), 3000);
    });
  }
  
  const arr = [10, 12, 15, 21];
  showOutpu(arr);