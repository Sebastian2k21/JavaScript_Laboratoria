let addInputButton = document.getElementById('addInput');
let removeInputButton = document.getElementById('removeInput');
let calculateButton = document.getElementById('calculate');

addInputButton.addEventListener('click', () => {
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'number';
    newInput.addEventListener('input', calculate);
    document.getElementById('inputs').appendChild(newInput);
});

removeInputButton.addEventListener('click', () => {
    let inputs = document.querySelectorAll('.number');
    if (inputs.length > 0) {
        let lastInput = inputs[inputs.length - 1];
        lastInput.parentNode.removeChild(lastInput);
    }
    calculate(); 
});

calculateButton.addEventListener('click', calculate);

function calculate() {
    let inputs = document.querySelectorAll('.number');
    let values = [];
    for (let input of inputs) {
        if (input.value !== '') {
            values.push(parseFloat(input.value));
        }
    }

    if (values.length > 0) {
        let sum = values.reduce((a, b) => a + b);
        let average = sum / values.length;
        let min = Math.min(...values);
        let max = Math.max(...values);

        // Aktualizacja wyników na stronie
        document.getElementById('sum').textContent = sum;
        document.getElementById('average').textContent = average;
        document.getElementById('min').textContent = min;
        document.getElementById('max').textContent = max;
    } else {
        document.getElementById('sum').textContent = '0';
        document.getElementById('average').textContent = '0';
        document.getElementById('min').textContent = '0';
        document.getElementById('max').textContent = '0';
    }
}

export { calculate };