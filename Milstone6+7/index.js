const fibBtn = document.getElementById("fibCaller");
fibBtn.addEventListener("click", saveCalcu);
let fibInput = document.getElementById("input");
const largerThan = document.getElementById("larger-than");
const serverErr = document.getElementById("life-meaning");
const spinner = document.getElementById("spinner");
const checker = document.getElementById("check-box");

function saveCalcu (){
    if( checker.checked === true){
        fetchData();  
    }
    else {
        fibonacci();
    }
}

function spinnerOn() {
    spinner.classList.remove("d-none");
}

function spinnerOff() {
    spinner.classList.add("d-none");

}

function fibonacci() {
    document.getElementById("life-meaning").innerText = ``;
    document.getElementById("output").innerText = ``;
    largerThan.classList.add("d-none");
    let x = document.getElementById("input").value;
    spinnerOn();
    let fibSantenc = " "
    let y = 0;
    if (x === 0) {
        fibSantenc = 0;
    }
    else if (x === 1) {
        fibSantenc = 1;
    }
    else {
        let f1 = 0;
        let f2 = 1;
        for (let j = 1; j < x; j++) {
            y = f1 + f2;
            f1 = f2;
            f2 = y;
        }
        fibSantenc = y;

    }
    spinnerOff();
    document.getElementById("output").innerText = fibSantenc;
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




