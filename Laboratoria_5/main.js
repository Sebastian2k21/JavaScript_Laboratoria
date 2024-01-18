// main.js
import { sum } from './mathOperations.js';

document.getElementById('addButton').addEventListener('click', async function() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;

    const start = performance.now(); // Start timing
    const result = await sum(num1, num2);
    const end = performance.now();
    const duration = end - start;  // Calculate the duration

    document.getElementById('result').innerText = `Result: ${result}`;
    document.getElementById('duration').innerText = `Operation took ${duration.toFixed(2)} milliseconds.`;
});
