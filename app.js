function getNumber(num) {
    var result = document.getElementById("inputValue");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("inputValue");
    result.value = "";
}

function deleteCharacter() {
    var result = document.getElementById("inputValue");
    result.value = result.value.slice(0, -1);
}

function getResult() {
    var result = document.getElementById("inputValue");
    result.value = eval(result.value);

}