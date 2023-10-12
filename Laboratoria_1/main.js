// Pobranie przycisków i pól tekstowych
let addInputButton = document.getElementById('addInput');
let removeInputButton = document.getElementById('removeInput');
let calculateButton = document.getElementById('calculate');

// Obsługa dodawania nowych pól tekstowych
addInputButton.addEventListener('click', () => {
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'number';
    newInput.oninput = calculate;
    document.getElementById('inputs').appendChild(newInput);
});

// Obsługa usuwania ostatniego pola tekstowego
removeInputButton.addEventListener('click', () => {
    let inputs = document.querySelectorAll('.number');
    if (inputs.length > 0) {
        let lastInput = inputs[inputs.length - 1];
        lastInput.parentNode.removeChild(lastInput);
    }
    calculate(); // Wywołanie funkcji przeliczania po usunięciu pola
});

// Obsługa przycisku "Przelicz"
calculateButton.addEventListener('click', calculate);

// Funkcja przeliczająca sumę, średnią, minimum i maksimum
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