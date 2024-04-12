

// global variables
answer = document.querySelector(".answer p");
buttons = document.querySelectorAll(".buttons button");
operators = ["+", "-", "*", "/", "%"];
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
answered = "false"
loader = document.querySelector(".loader");


// loader first and foremost
document.addEventListener("DOMContentLoaded", () => {
    loader.classList.add("fadeOut");
})



// a little validation for the clicked buttons 
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(answer.textContent == "242424"){
            document.body.style.display = "none"
            return
        }
        if(button.textContent == "AC"){
            answer.textContent = "0";
        }
        else if(button.textContent == "C"){
            answer.textContent = answer.textContent.slice(0, -1);
            if(answer.textContent == ""){
                answer.textContent = "0";
            }
        }
        else if(button.textContent == "="){
            if(answer.textContent.slice(-1) == "." || operators.includes(answer.textContent.slice(-1))){
                return
            }
            calculate()
            answered = "true"
        }
        else{
            displayButtons(button.textContent)
        }
    })
})


// get the number or operator that is typed
document.addEventListener("keydown", (event) => {
    var button = event.key;
        if(answer.textContent == "242424"){
            document.body.style.display = "none"
            return
        }
        if(button == "Delete"){
            answer.textContent = "0";
        }
        else if(button == "Backspace"){
            answer.textContent = answer.textContent.slice(0, -1);
            if(answer.textContent == ""){
                answer.textContent = "0";
            }
        }
        else if(button == "=" || button == "Enter"){
            if(answer.textContent.slice(-1) == "." || operators.includes(answer.textContent.slice(-1))){
                return
            }
            calculate()
            answered = "true"
        }
        else{
            displayButtons(button)
        }
})



const displayButtons = (button) => {
    if (answer.textContent.length > 15) {
        return
    }

    // display number button clicked
    numbers.forEach(number => {
        if (number.includes(button)) {
            if (button == ".") {
                if(answer.textContent.includes(".") || operators.includes(answer.textContent.slice(-1))){
                    return
                }
            }
            if (answer.textContent == 0 || answered == "true") {
                if (button != ".") {
                    if (answer.textContent.slice(-1) == ".") {
                        // do nothing
                        answered = "false";
                    }else{
                        answer.textContent = "";
                        answered = "false";
                    }
                }
            }
            answer.textContent += number;
        }
    })


    // display operator button clicked
    operators.forEach(operator => {
        if (operator.includes(button)) {
            if (answer.textContent.slice(-1) == "." || operators.includes(answer.textContent.slice(-1))) {
                return
            }
            answer.textContent += operator;
            answered = "false"
        }
    })
}



const calculate = () => {
    let result = eval(answer.textContent);
    if (isNaN(result)) {
        result = "Error"
    }
    answer.textContent = result;
}



