document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event triggered");
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');
    let displayValue = '';


    buttons.addEventListener('click', function(event) {
        const clickedButton = event.target;
        if (clickedButton.tagName === 'INPUT' && clickedButton.type === 'button') {
            const buttonValue = clickedButton.value;
            if (buttonValue === 'AC') {
                clearDisplay();
            } else if (buttonValue === 'DE') {
                deleteLastCharacter();
            } else if (buttonValue === '=') {
                calculate();
            } else {
                appendToDisplay(buttonValue);
            }
        }
    });
    
    function appendToDisplay(value) {
        displayValue += value;
        display.textContent = displayValue;
    }

    function clearDisplay() {
        displayValue = '';
        display.textContent = displayValue;
    }

    function deleteLastCharacter() {
        displayValue = displayValue.slice(0, -1);
        display.textContent = displayValue;  
    }

    function calculate() {
        try {
            const result = eval(displayValue);
            displayValue = result.toString();
            display.textContent = displayValue;
        } catch (error) {
            displayValue = '';
            display.value = 'Error';
        }
    }
});
