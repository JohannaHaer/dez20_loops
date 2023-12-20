let returnArray = []

let imageArray = () => {
    
    for (let x = 1; x <= 100; x++) {

        if (x < 10) {
            returnArray.push(`image\_00${x}.jpg`)
        } else if (x >= 10 && x <= 99) {
            returnArray.push(`image\_0${x}.jpg`)
        } else {
            returnArray.push(`image\_${x}.jpg`)
        }
    }
}

imageArray()

console.log(returnArray);