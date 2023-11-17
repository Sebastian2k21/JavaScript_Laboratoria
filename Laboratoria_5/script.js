document.getElementById('addButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;

    const start = performance.now(); // Start timing

    addNumbersAsync(num1, num2).then(result => {
        const end = performance.now(); // End timing
        const duration = end - start;  // Calculate the duration

        document.getElementById('result').innerText = `Result: ${result}`;
        document.getElementById('duration').innerText = `Operation took ${duration.toFixed(2)} milliseconds.`;
    }).catch(error => {
        console.error('Error:', error);
    });
});

function addNumbersAsync(num1, num2) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, 100);
    });
}
