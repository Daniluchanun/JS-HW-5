STriangle = (a, b) => a * b;
console.log(STriangle(3, 5));


const PI = 3.14
SCircle = (r) => PI * (r * r);
console.log(SCircle(3.5));


SСyl = (r, h) => 2 * PI * r * (h + r);
console.log(SСyl(2, 4));



ElementsOfArray = (array) => {  //Не знаю як зробити її більш лінійною((
    for (const item of array) {
        console.log(item);
    }
}
ElementsOfArray([1, 2, 3, 4, 5]);



TextInPar = (text) => `<p>${text}</p>`;
document.write(TextInPar('Hello World!'));



createLiInUlx3 = (text) =>
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`;
document.write(createLiInUlx3('Hello World!'));



LiToConsole = (text, nums) => {
    document.write(`<ul>`)
    for (let i = 0; i < nums; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

LiToConsole('we all not the same', 5);



builder = (arr) => {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
builder([32, 'Arni Schwarznigger', true]);



randomTitle = (users) => {
    for (const user of users) {
        document.write(`<div><li>${user.id} ${user.name} ${user.age}</li></div>`);
    }
}
randomTitle([
    {id: 1, name: 'Arni', age: 46},
    {id: 2, name: 'Vanya', age: 45},
    {id: 3, name: 'Gad', age: 44},
    {id: 4, name: 'Vlad', age: 47},
    {id: 5, name: 'Anatoliy', age: 35},
]);



minValue = (numbers) => {
    let min = numbers[0];
    for (const minElement of numbers) {
        if (minElement < min) {
            min = minElement;
        }
    }
    return min;
}
console.log(minValue([3, 4, 5, 2, -1, 44, 23, -9, -10, 0, 7, -7]));



sum = (arr) => {
    let item = 0;
    for (const arrElement of arr) {
        item = item + arrElement;
    }
    return item;
}
console.log(sum([3, 4, 5, 2, -1, 44, -23, -9, 0, 7, -7]));



swap = (arr, number1, number2) => {
    let first = arr[number1];
    arr[number1] = arr[number2];
    arr[number2] = first;

    return arr;
}
console.log(swap([11,22,33,44], 0, 1));




exchange = (sumUAH, currencyValue, exchangeValue) => {
    let chosenValue;
    for (const item of currencyValue){
        if (item.currency === exchangeValue){
            chosenValue = item;
        }
    }
    let result = sumUAH/chosenValue.value;
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));
