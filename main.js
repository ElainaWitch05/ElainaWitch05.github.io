function appendToDisplay(input) {
    document.getElementById('display').value += input;
}

function deleteAll() {
    document.getElementById('display').value = ' ';
}

function deleteOne() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, display.value.length - 1);
}

function calculate() {
    let input = document.getElementById('display').value;
    document.getElementById('display').value = eval(input);
}

function changeBackgroundColor(color) {
    if (color == 'blue') 
        document.body.style.background = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)';    
     else 
        document.body.style.background = 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)';
}