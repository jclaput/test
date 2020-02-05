let myArray = ["John", "Osrald", "Laput"];

var globalVar = "";

myArray.forEach((element,index) =>{
    globalVar += element;
});

console.log(globalVar);