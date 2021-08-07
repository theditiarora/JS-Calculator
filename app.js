const numbers = document.querySelectorAll(".number")
const operator = document.querySelectorAll(".operator")
const delBtn = document.querySelector(".del-btn")
const clearBtn = document.querySelector(".clear-btn")
const equalBtn = document.querySelector(".equal-btn")
const output = document.querySelector(".output")
const history = document.querySelector(".history")

numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        output.innerText += `${btn.innerText}` 
    })
})

operator.forEach(btn => {
    btn.addEventListener("click", () => {
        history.innerText += `${btn.innerText}` 
        history.innerText += `${output.innerText}`
        output.innerText += `${btn.innerText}`
    })

})

equalBtn.addEventListener("click", () => {
    output.innerText = eval(output.innerText)
    history.innerText = ""
})

clearBtn.addEventListener("click", () => {
    output.innerText = ""
    history.innerText = ""
})

delBtn.addEventListener("click", () => {
    output.innerText = output.innerText.substr(0,output.innerText.length-1)
})


