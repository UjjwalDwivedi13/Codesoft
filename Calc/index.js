document.addEventListener('DOMContentLoaded', function () {
    // Get the output screen element
    const outputScreen = document.querySelector('.outputScreen');

    // Function to append numbers and operators to the output screen
    function appendToScreen(value) {
        outputScreen.textContent += value;
    }

    // Function to clear the output screen
    function clearScreen() {
        outputScreen.textContent = '';
    }

    

    // Function to calculate the result based on the expression in the output screen
    function calculateResult() {
        try {
            const result = eval(outputScreen.textContent);
            outputScreen.textContent = result;
        } catch (error) {
            outputScreen.textContent = 'Error';
        }
    }

    // Get all buttons
    const buttons = document.querySelectorAll('.btStyle');

    // Loop through each button and attach event listeners
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button.textContent);
            const buttonText = button.textContent;

            // Check if the button is for calculation or not
            if (buttonText === '=') {
                calculateResult();
            } else if (buttonText === 'C') {
                clearScreen();
            } 
            else if (buttonText==='X')
            {
                outputScreen.textContent = outputScreen.textContent.slice(0, -1);
            }
            
            else {
                appendToScreen(buttonText);
            }
        });
    });
});