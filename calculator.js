let displayValue = '0';
function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
function appendInput(input) {
    if (displayValue === '0' && input !== '.') {
        displayValue = input;
    } else {
        displayValue += input;
    }
    updateDisplay();
}
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}
function calculate() {
    try {
        const result = eval(displayValue); 
        displayValue = String(result);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
