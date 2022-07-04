const fibBtn = document.getElementById("fibCaller");
fibBtn.addEventListener("click", fetchData);
let fibInput = document.getElementById("input");
function fetchData(){
fetch(`http://localhost:5050/fibonacci/${fibInput.value}`)
.then( res => res.json())
.then((data) => { 
    document.getElementById("output").innerText = data.result;
 })
}

