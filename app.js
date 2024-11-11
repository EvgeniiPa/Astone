
//===============================================Задание №3============================================

let person = {
    name: "Evgenii",
    age: "27",
};

person.logInfo = function(){
    return `Name: ${this.name}, Age: ${this.age}`
}

let personNew = new Object({
    name: "Anton",
    age: "29",
});

let personCreate = Object.create(person);

personCreate.name = "Anastasya";
personCreate.age = "25";

class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let person2 = {
    name: "Petr",
    age: "18",
    _proto_: person,
}

let person2Create = Object.create(person)

Object.defineProperties(person, 'logInfo',{
    value: function(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
})

//===============================================Задание №4============================================

class PersonThree extends PersonClass {
    constructor(name, age) {
        super(name, age);
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }
}

//===============================================Задание №5*============================================

function firstSum(arr, total) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

//===============================================Задание №5**============================================

//Сложность (Big O): O(n²)
