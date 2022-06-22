const fibBtn = document.getElementById("fibCaller");
fibBtn.addEventListener("click", fibonacci);
function fibonacci(){
    let x = document.getElementById("input").value;
    console.log(x);
   let fibSantenc = " "
    let y=0;
    if(x===0){
        fibSantenc = 0;
    }
    else if(x===1){
        fibSantenc = 1;
    }
    else{
        let f1 = 0;
        let f2 = 1;
        for(let j =1;j<x;j++){
            y = f1+f2;
            f1 = f2;
            f2 = y;    
        }
    fibSantenc = y;

    }
    
    document.getElementById("output").innerText= fibSantenc;
}



 