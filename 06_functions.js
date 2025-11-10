function hny() {
    console.log("happy new year");
    //function declaratiob
}
// hny()

let fnc= function() {
    console.log("hello");
    //function Expression
}
// fnc()

let myfnc = () => {
    console.log("ok men");
    
}
// myfnc()


function dance(value) {
    console.log(`${value} nach raha he`);
    
}
// dance("ghoda") 
// dance("cow") 
// dance("tiger") 
// dance("lion") 


function add(val1, val2) {
    val1 + val2;
    
}

// console.log(add(1,2)); // ubdefined dega kyuki return nhi kia he hamane



function add(val1, val2) {
   console.log(val1 + val2) 
    
}
// add() //if I not give the value of in val1 and val2 so it gives undefined output because of val1 and val2 is varibale

//rest oper
function abcd(...val) {
   console.log(val);
   
}

// abcd(1,2,3,4,5,6,7,8,9,10) //output-[1,2,3,4,5,6,7,8,9,10]



//return - jahase aya ho ava vapis chale jaoo
function ok(val) {
     return 12 + val;
}


// console.log(ok(1))
let result = ok(2)
// console.log(result);


//first class function
function vijay(val) {
    
}
//  val()
// vijay(function() {
//     console.log("hello vijay");
    
// })


//higher order function
// function fuck() {
//       return function() {
//               console.log("fuck");
              
//       }
// }
// fuck()()



//this also hof
function fuck(b) {
    // b()
}

// fuck(function() {
//     console.log("fuck off");
    
// })


//impure and pure
// let a = 12;
// function aa() {
//    return a++
// }

// let res = aa()
// console.log(result);


//closure- ek aise function jo return kare aur function aur return hona wala function hamseha use karega parent function koi variable
// function parent() {
//     let z = 2; //parent function ka varable ye he
//     function child() {
//         console.log(z);
        
//     }
// }




//lexical scoping - a ko sirf hum abc() ma hii access kr skate he, b ko hum sirf def() ma hi access kar sakte he, aur c ko hum sirf fhu() ma hi access kr sakte he.....
// function abc() {
//     let a= 1;
//     function def() {
//         let b =2; 
//         function ghi() {
//             let c = 3
//         }
//     }
// }


//iifi - call karne ke jaruart nahi he, call ho chuka he..
// (function iifi() {
//          console.log("hey");
         
// })()


//hoisting - function ke phaile he hum use call kr skate he , but function expression ma nahi chalta he ye 
// hois()

// function hois() {
//     console.log("hi hoisting");
    
// }




//Qs
// function getScore(...score) {
//     let total = 0;
//       score.forEach(function(val) {
//          total = total + val
//       })
//     return total
    
// }
// console.log(getScore(1,2,3,4,5));


//convert the above function in the pure function 
// let total = 0;

// function pure(num) {
//    let newTotal= total
//    return newTotal += num


// }

// console.log(pure(3));



//Qs closure concept
// function outer() {
//     let count = 0
//     return function() {
//            count++
//            console.log(count)
//     }

// }
// let counter = outer()
// counter()
// counter()
// counter()
// counter()



//BMI calculator
// function bmi(weight, height) {
//    return weight / (height * height)
     
// }

// console.log(bmi(50, 1.7))





//discount calculator 
// function discountCal(discount) {
//     return function(price) {
//         return price - price * (discount/100)
//     }

// }

// let ten = discountCal(10)
// let twenty = discountCal(20)

// result = ten(200)

// console.log(result);


//imp Qs and concept
// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//       return count
        
//     }
// }

// let c = counter()
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// let d = counter()
// console.log(d());



//Qs imp concept
// function double(val) {
//     return val * 2;
// }


// console.log(double(5));


//iifi
(function () {
    const password = "secerte password"
    console.log(password);
    
})()

console.log(password)// error 
