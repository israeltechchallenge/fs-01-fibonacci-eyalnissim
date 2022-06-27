const fibBtn = document.getElementById("fibCaller");
fibBtn.addEventListener("click", spinnerOn);
fibBtn.addEventListener("click", fetchData);
let fibInput = document.getElementById("input");
const largerThan = document.getElementById("larger-than");
const serverErr = document.getElementById("life-meaning");

function spinnerOn() {
    document.getElementById("spinner").innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
}

function spinnerOff() {
    document.getElementById("spinner").innerHTML = ``;
}


function fetchData() {
    let url=`http://localhost:5050/fibonacci/${fibInput.value}`;
    document.getElementById("life-meaning").innerText = ``;
    document.getElementById("output").innerText = ``;
    largerThan.classList.add("d-none");

    if (fibInput.value > 50) {
        spinnerOff();
        largerThan.classList.remove("d-none");
    }

    else {
        fetch(url)
        .then(res => {
            if(res.ok) {return res.json()}
            else {
                return res.text().then(text=> {throw new Error(text)})
            }})
        .then((data) => {
            spinnerOff();
            document.getElementById("output").innerText = data.result;
        })
        .catch((error) => {
            spinnerOff();
                document.getElementById("life-meaning").innerText = `server Error: ${error}`;          
                });
    }
     
}
