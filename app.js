function getNumber(num) {
    var equation = document.getElementById("equation");
    equation.value += num;
}
function clearBtn() {
    var equation = document.getElementById("equation");
    equation.value = "";
}
function getSolution() {
    var answer = document.getElementById("answer");
    answer.value = eval(equation.value)
}
function getPercentage() {
    var equation = document.getElementById("equation");
    equation.value = eval(equation.value)
    answer.value = (equation.value / 100)
}