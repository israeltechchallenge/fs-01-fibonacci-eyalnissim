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
    if (fibInput.value > 50) {
        spinnerOff()
        largerThan.classList.remove("d-none");

    }

    fetch(`http://localhost:5050/fibonacci/${fibInput.value}`)
        .then(res => res.json())
        .then((data) => {
            spinnerOff();
            document.getElementById("output").innerText = data.result;
        }).catch((error) => {
            spinnerOff();
            document.getElementById("life-meaning").innerText = "server Error" + error;
            
        });
}
