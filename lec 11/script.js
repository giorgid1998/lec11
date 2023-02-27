const fruit = ["apple", "banana", "orange", "mango"]
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}




const numbers = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        console.log(numbers[i])
    }
}


function display(x, func) {
    let message = func(x)
    document.write(message)
}
function shefasebisfunc(price) {
    if (price > 50)
        return "ძვირია"
    else if (price>20 && price<50)
        return "საშუალო"
    else
        return "იაფი"

}
display(50, shefasebisfunc)

