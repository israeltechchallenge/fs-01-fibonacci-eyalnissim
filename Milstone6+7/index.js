const fibBtn = document.getElementById("fibCaller");
fibBtn.addEventListener("click", fetchData);
let fibInput = document.getElementById("input");
const largerThan = document.getElementById("larger-than");
const serverErr = document.getElementById("life-meaning");
const spinner = document.getElementById("spinner");


function spinnerOn() {
    spinner.classList.remove("d-none");
}

function spinnerOff() {
    spinner.classList.add("d-none");

}


function fetchData() {
    spinnerOn();
    let url = `http://localhost:5050/fibonacci/${fibInput.value}`;
    document.getElementById("life-meaning").innerText = ``;
    document.getElementById("output").innerText = ``;
    largerThan.classList.add("d-none");
    spinnerOn();
    if (fibInput.value > 50) {
        spinnerOff();
        largerThan.classList.remove("d-none");
    }

    else {
        fetch(url)
            .then(res => {
                if (res.ok) { return res.json() }
                else {
                    return res.text().then(text => { throw new Error(text) })
                }
            })
            .then((data) => {
                document.getElementById("output").innerText = data.result;
                fibRes();
                spinnerOff();
            })
            .catch((error) => {
                spinnerOff();
                serverErr.innerText = `server Error: ${error}`;
            });

    }
    
}

window.addEventListener('load', fibRes);

function fibRes() {
    let urlRes = `http://localhost:5050/getFibonacciResults `;
    fetch(urlRes)
        .then((response) => response.json())
        .then((data) => {
            let resSentence = ``;
            for (variable of data.results) {
                let resList = `<li class="text-decoration-underline h3 mb-3">The Fibonnaci of <b>${variable.number}</b> is <b>${variable.result}</b> Calculated at:${new Date(variable.createdDate)}</li>`;
                resSentence += resList;
            }
            document.getElementById("results-sentence").innerHTML = resSentence;

        });
}



