let output = document.querySelector("#output")
let array = []



let loop = () => {
    array.splice("o")
    array.splice("O")
    let input = Number(document.querySelector("#number").value)
    let inputValue = document.querySelector("#number")
    inputValue.value = ""

    if (input >= 1 && input % 2 === 0) {
        for (let index = 1; index <= input; index++) {
            array.push("o")        
        }
        return output.innerHTML = `l${array.join("")}p`
    } else if (input >= 1 &&  input % 2 != 0) {
        for (let index = 1; index <= input; index++) {
            if (index % 2 === 0) {
                array.push("O") 
            } else {
                array.push("o") 
            }       
        }
        return output.innerHTML = `l${array.join("")}p`
    } else if (input < 1) {
        return output.innerHTML = `Fehler`
    }
    
}