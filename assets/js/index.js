'use strict'

// 1) Переписать функцию-конструктор MyArray на классы.
// Дописать методы shift, unshift.

// class MyArray {
//     length = 0;
//     data = {};
//     constructor(...args) {
//         this.length = args.length;
//         for (const key in args) {
//             this.data[key] = args[key];
//         }
//         /* for (const key of args) {
//             this.data[key] = args[key];
//         } */
//         /*  for (let i = 0; i < arguments.length; i++) {
//              this[this.length] = arguments[i];
//              this.length++;
//          } */
//     }

//     static isArray(arr) {
//         return arr instanceof MyArray;;
//     }

//     isEmpty() {
//         return this.length === 0;
//     }

//     push(...item) {
//         for (const key in item) {
//             this.data[this.length++] = item[key];
//         }
//         // return this.length;
//     }

//     pop() {
//         const element = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return element;
//     }

//     forEach(callback) {
//         for (let i = 0; i < this.length; i++) {
//             callback(this.data[i], i, this.data);
//         }
//     }

//     concat(arr) {
//             let res = new MyArray();

//             for (let i = 0; i < this.length; i++) {
//                 res.push(this.data[i]);
//             }
//             for (let i = 0; i < arr.length; i++) {
//                 res.push(arr.data[i]);
//             }
//             return res.getMyArray();
//         }
//         /*     concat(...args) {
//                 let res = new MyArray();
//                 let initialArr = this.data;
//                 for (let i = 0; i < initialArr.length; i++) {
//                     res.push(initialArr[i]);
//                 }
//                 for (let j = 0; j < args.length; j++) {
//                     if (MyArray.isArray(args[j])) {
//                         let arr = args[j];
//                         for (let k = 0; k < arr.length; k++) {
//                             res.push(arr[k]);
//                         }
//                     } else {
//                         res.push(args[j]);
//                     }
//                 }
//                 return res;
//             } */

//     /* concat(...arr) {
//         let res = new MyArray();
//         for (let i = 0; i < this.length; i++) {
//             res.push(this.data[i]);
//         }
//         for (let i = 0; i < arr.length; i++) {
//             res.push(arr[i]);
//         }
//         return res.getMyArray();
//     } */

//     /*     concat(arr, ...values) {
//             const res = [...arr];
//             const {
//                 length
//             } = values;
//             for (let i = 0; i < length; i++) {
//                 const value = values[i];
//                 if (MyArray.isArray(value)) {
//                     this.push(res, ...value);
//                 } else {
//                     this.push(res, value);
//                 }
//             }
//             return res.getMyArray();
//         } */

//     flat(depth = 1) {
//         if (depth < 0) {
//             console.error("depth must be a positive value");
//             return;
//         }
//         let flatArr = new MyArray();
//         if (depth === 0) {
//             flatArr = flatArr.concat(this.data);
//             return flatArr;
//         }
//         for (let i = 0; i < this.length; i++) {
//             if (Array.isArray(this.data[i])) {
//                 // Always array}
//                 const buffer = this.data[i].flat(depth - 1);
//                 flatArr = flatArr.concat(buffer);
//             } else if (this.data[i] !== undefined) {
//                 // Always rest
//                 flatArr.push(this.data[i]);
//             }
//         }
//         return flatArr;
//     }

//     shift() {
//         const {
//             length
//         } = this.data;
//         const firstVal = this.data[0];

//         for (let i = 0; i < length; i++) {
//             const val = this.data[i];
//             this.data[i - 1] = val;
//         }
//         this.data.length = length - 1;
//         return firstVal;
//     }

//     unshift(arr, ...vals) {
//         const resArr = this.data.concat(vals, ...arr);
//         const {
//             length: resArrLen
//         } = resArr;

//         for (let i = 0; i < resArrLen; i++) {
//             const val = resArr[i];
//             arr[i] = val;
//         }
//         return arr.length;
//     }

//     size() {
//         return this.length;
//     }

//     // ???
//     getMyArray() {
//         return this.data;
//     }
// }

// // my Arr test
// const myArrTest = new MyArray(1, 2, 3, 4, 5, 6, 7, 8);
// const myArrTest1 = [11, 22];
// const myArrTest2 = new MyArray(333, 444, 555);

// console.log(myArrTest);
// console.log(myArrTest.size(), "size()");
// console.log(myArrTest.getMyArray(), "getMyArray()");
// console.log(myArrTest.isEmpty(), "isEmpty()");
// console.log(myArrTest.push(33), "push()");
// console.log(myArrTest.push(44, 55, 66, 77), "push()");
// console.log(myArrTest.getMyArray(), "getMyArray() after push");
// console.log(myArrTest.pop(), "pop()");
// console.log("forEach() ->");
// myArrTest.forEach(element => console.log(element * 2));
// console.log(MyArray.isArray(myArrTest), "isArray()");
// console.log(myArrTest.concat(myArrTest2, myArrTest1), "concat()");

// let myArrTest4 = new MyArray();
// myArrTest4 = [3, 4, [
//     [56]
// ], 6, 7, 8];
// console.log(myArrTest4.flat(2), "flat()");

// console.log(myArrTest.shift(), "shift()");
// console.log(myArrTest.length); //check
// console.log(myArrTest.unshift(0), "unshift()");

// console.log("   ");
// console.log("++++++++++++ Array +++++++++");

/* // JS Arr Test
let arrTest = [1, 2, 3, 4, 5, 6, 7, 8];
const arrTest1 = [11, 22];
const arrTest2 = [333, 444, 555];
console.log(arrTest, "Array");
console.log(arrTest.length, "Array");
console.log(arrTest.push(33), "Array.push(33)");
console.log(arrTest.push(44, 55, 66, 77), "Array.push(44, 55, 66, 77)");
console.log(arrTest, "Array after push");
console.log(arrTest.pop(), "Array.pop()");
console.log("Array.forEach() ->");
arrTest.forEach(element => console.log(element * 2));
console.log(Array.isArray(arrTest), "Array.isArray()");
console.log(arrTest.concat(arrTest1), "Array.concat()");
console.log(arrTest.concat(arrTest2, arrTest1), "Array.concat()");

let arrTest4 = [0, [1, [2],[[[3]]]], 4]; //
console.log(arrTest4.flat(4));

console.log(arrTest.shift(), "Array.shift()");
console.log(arrTest.length);
console.log(arrTest.unshift(0), "Array.unshift()"); */

//2) Реализовать класс RangeValidator, со следующими свойствами:
// ■  from (number);
// ■  to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

/* class RangeValidator {
    arrRange = [];
    constructor(from = 0, to = 100) {
        this.start = from;
        this.end = to;
    }

    // static validate(num) {
    validate(num) {
        // return this.range.every((num, i, list) =>
        //     (num >= list[i] && num <= list[i]));
        if (num >= this.start && num <= this.end) {
            return true;
        } else {
            return false;
        }
    }

    get range() {
        let arrRange = [];
        arrRange[0] = this.start;
        arrRange[1] = this.to;
        return arrRange;
    }

    get from() {
        return this.start;
    }

    get to() {
        return this.end;
    }

    set from(num) {
        if (Number(num)) {
            this.start = num;
        }
    }

    set to(num) {
        if (Number(num)) {
            this.end = num;
        }
    }
}

let r1 = new RangeValidator();
console.log(r1);
console.log(r1.from);
console.log(r1.to);

r1.from = 25;
r1.to = 77;

console.log(r1.from);
console.log(r1.to);

console.log(r1.range);
console.log(r1.validate(50)); //  true for 25-77
console.log(r1.validate(1)); //  false for 25-77
// console.log(RangeValidator.validate(50));  //  if validate() is static */



// 3. Сделайте функцию, которая определяет, есть в массиве заданный элемент или нет.
/* let arrTest = [1, 45, 87, 34, 13, 654, 879];

function isExist(item) {
    return arrTest.includes(item);
}

console.log(isExist(45)); //   true
console.log(isExist(5)); //   false */