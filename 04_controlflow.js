//if else else-if
//switch case
//early return patterns

// if(2 < 5) {
//     console.log("right");
    
// }else {
//     console.log("wrong");
    
// }


// switch (3) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//          console.log("2");
//         break;
//     case 3:
//          console.log("3");
//         break;
//     case 4:
//          console.log("4");
//         break;

//     default:
//         break;
// }



// function abc(val) {
//     if(val < 25 ) return "D"
//     else if(val < 50) return "C"
//     else if (val < 75) return "B"
//     else return "A"
// }
// console.log(abc(2));


//Qs. Rock, paper and seccisor

function game(user, comp) {
   
     if(user === "paper" && comp === "rock") return "user Win"
     if(user === "secissor" && comp === "paper") return "user Win"
    
     if(user === "rock" && comp === "secissor") return "user Win"
    
     return comp;
 

}


console.log(game("rock", "paper"));
