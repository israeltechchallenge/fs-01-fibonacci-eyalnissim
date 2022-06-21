let fibSantenc = " "
 let y=0;
function fibonacci(x){
   
    if(x===0){
        fibSantenc =`The Fibonacci of 0 is 0`;
    }
    else if(x===1){
        fibSantenc =`The Fibonacci of 1 is 1`;
    }
    else{
        let f1 = 0;
        let f2 = 1;
        for(let j =1;j<x;j++){
            y = f1+f2;
            f1 = f2;
            f2 = y;    
        }
    fibSantenc =`The Fibonacci of ${x} is ${y}`;

    }
    return fibSantenc;
}



 document.getElementById("output").innerText= fibonacci(x);