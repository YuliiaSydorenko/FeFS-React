//Задача: вернуть новый массив, значением которого будут длины строк исходного массива
const numbersArray = ["один","два","три", "четыре", "пять"];

const newArray = numbersArray.map(item => item.length);

console.log(newArray); // [4, 3, 3, 7, 4]
