//====================================================== emty and create ======================================================

// function deleteKeys(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       delete obj[key];
//     }
//   }
// }
// const myObj = {
//   name: "Albert",
//   surname: "Einstain",
//   age: "dead",
//   nationality: "German",
// };
// console.log(myObj);
// deleteKeys(myObj)
// console.log(myObj);

// function createNewObj(obj) {
//     const newObj = Object.create(Object.getPrototypeOf(obj))
//     return newObj
// }

// console.log(myObj);
// const emptyObj = createNewObj(myObj)
// console.log(emptyObj);

//====================================================== emty and create ======================================================

// Number.prototype.add = function (num) {
//   return this + num;
// };
// Number.prototype.substract = function (num) {
//   return this - num;
// };
// Number.prototype.divide = function (num) {
//   return this / num;
// };
// Number.prototype.multiply = function (num) {
//   return this * num;
// };

// const result = (5).add(3).substract(4).divide(2).multiply(10)
// console.log(result);

//====================================================== emty and create ======================================================

const myObj = {
  length: 0,
  pushh: function (params) {
    this[this.length] = params;
    this.length++;
  },
  length: 0 < length,
  popp: function (params) {
    this[this.length] = params;
    this.length--;
  }
};
myObj.pushh('1','2','3','4','5','6');
myObj.popp('1','2');
console.log(myObj);
