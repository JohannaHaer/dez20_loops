
let count = () => {
    let output = document.querySelector("#output");
    let number = Number(document.querySelector("#number").value);
    let firstNum = Number(document.querySelector("#firstNum").value) + 1;
    let secondNum = Number(document.querySelector("#secondNum").value) + 1;
    let sum = 0;
    

    for (let index = 0; index < number; index += 1) {
        if ((index % firstNum) === 0 || (index % secondNum) === 0) {
            sum += index;
        }
        
    }
    
    return output.innerHTML = sum;
};