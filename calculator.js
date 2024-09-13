
function add(){
    let num1 = + document.getElementById("num1").value
    let num2 = + document.getElementById("num2").value
    let sum = num1 + num2
    document.getElementById("result").innerHTML = sum
}
function subtract(){
    let num1 = + document.getElementById("num1").value
    let num2 = + document.getElementById("num2").value
    let num = num1 - num2
    document.getElementById("result").innerHTML = num
}
function multiply(){
    let num1 = + document.getElementById("num1").value
    let num2 = + document.getElementById("num2").value
    let num = num1 * num2
    document.getElementById("result").innerHTML = num
}
function divide(){
    let num1 = + document.getElementById("num1").value
    let num2 = + document.getElementById("num2").value
    let num = num1 / num2
    num = Math.round(num*100)/100
    document.getElementById("result").innerHTML = num
}