console.log("hello world")

const weight = document.getElementById("weight")
const reps = document.getElementById("reps")
const calculate  = document.querySelector("#calculate")
const result = document.getElementById("result")

function calcMax() {
    console.log("calc max function used")
    console.log(weight.value)
    console.log(reps.value)
    let maxWeight = weight.value /(1.0278 - (0.0278 * reps.value))
    maxWeight = Math.round(maxWeight)
    result.innerText = maxWeight
    console.log(maxWeight)
    document.getElementById("weight").value = ""
    document.getElementById("reps").value = ""
}

function clearMax() {
    maxWeight = ""
}






calculate.addEventListener("click", calcMax)