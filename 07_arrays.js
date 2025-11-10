//arrays
// let marks = [1,2,3,4,5]
// console.log(marks[3]);
// marks[4] = 9
// console.log(marks);


//push, pop, ushift, shift, slice, splice, reverse

// let arr = [ 1,2,3,4,5,6,7,8,9,10]
// arr.push(11) //add in the last..
// arr.pop()
// arr.unshift(12) //add in starting
// arr.shift()
// arr.splice(2, 2)
// let newarr = arr.slice(2,5)
// arr.reverse()

// let ar =[11, 65, 7, 34, 22]
// let res = ar.sort(function(a , b){
//     return a - b

// })

// console.log(res);


//for Each
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach(function(val) {
//     console.log(val)
// }) 


//map
// let myarr = [11,23,4, 5, 67,88]
// let myNewarr = myarr.map(function(value) {
//     if(value > 10) return value
// })

// console.log(myNewarr);


//filter --> array ma se value ko filter kartea he ye....
// let myarr = [1,2,3,4,5,6,7,8,9,10]
// let res = myarr.filter(function(val) {
//      if(val > 5) {
//         return true
//      }
// })

// console.log(res);


//reduce
// let myarr = [1,2,3,4,5]
// let newarr = myarr.reduce(function(acc, val) {
//       return acc + val
// }, 0)
// console.log(newarr)


//find
// let arr = [1,2,3,4,5]
// let result = arr.find(function(v) {
//     return v

// })
// console.log(result);


//some
// let arr = [34,78,77,55,90]
// newTopper = arr.some(function(val) {
//     return val > 80
// })

// console.log(newTopper);


//every
// let arr = [22,45,6,66,90]
// let student = arr.every(function(stu) {
//     return stu < 100
// })

// console.log(student);


//spread
// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1]
// console.log(arr2);


//sort the arrya and reverse it
// let arr = ["zara", "mira", "vijay", "sujal"]
//  let newarr = arr.sort().reverse()

// console.log(newarr);


//Destructure 
// let fullName = ["vijay", "shah"]
// let [firstname, lastname] = fullName
// console.log(firstname);


//Qs. merge it using spread
let a = [1,2,3]
let b = [4,5,6]
let c = [...a,...b]
console.log(c);
