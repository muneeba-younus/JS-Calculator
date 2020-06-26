function getNumber(num) {
    var answer = document.getElementById("answer");
    answer.value += num;
}
function clearBtn() {
    var answer = document.getElementById("answer");
    answer.value = "";
}
function getSolution() {
    var answer = document.getElementById("answer");
    answer.value = eval(answer.value)
}
function getPercentage() {
    var answer = document.getElementById("answer");
    answer.value = eval(answer.value)
    answer.value = (answer.value / 100)
}
function getSquare() {
    var answer = document.getElementById("answer");
    answer.value = answer.value * answer.value;
}
function getCube() {
    var answer = document.getElementById("answer");
    answer.value = answer.value * answer.value;
}
function getSquareRoot() {
    var answer = document.getElementById("answer");
    answer.value = Math.sqrt(answer.value);
}
function backspace(){
    var result = document.getElementById("answer").value;
    document.getElementById("answer").value = result.substring(0,result.length -1);
}
