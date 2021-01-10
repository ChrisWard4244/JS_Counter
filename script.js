var count = 0;

function initialCounter() {
    document.getElementById("total").innerHTML = count;
}

initialCounter();

function addCounter() {
    count += 1;
}

function removeCounter() {
    if (count > 0) {
   count -= 1;
    }
    else {
    count = 0;
    }
}

function resetCounter() {
    count = 0;
}