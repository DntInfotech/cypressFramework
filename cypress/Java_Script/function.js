function myfunction(x,y){
    console.log("done")
    return Math.round (1+(x+y)/2)
}
let a=2
let b=3
let c=5
console.log("the avg of a and b is",myfunction(a,b))
console.log("the avg of a and b is",myfunction(b,c))
//Second way to define function
const sum=(a,b)=>{
    return (a+b)
}
console.log(sum(5,10))
//CALL FUNCTION WITH PARAMETR
const hello=(String)=>{
    console.log("say hello to all friend"+"   "+String)
}
hello("HARE KRUSHANA");

//CALL FUNCTION WITHOUT PARAMETR
const Name=()=>{

    console.log("my name is roshan")
}
    Name();