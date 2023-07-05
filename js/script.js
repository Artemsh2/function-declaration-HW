'use strict'

//Function declaration
//1. Напишіть функцію greet, яка виводить на екран привітання з вказаним ім'ям. Наприклад, greet("Василь") повинно вивести "Привіт, Василь!".
// function greet(name){
//     console.log(`Привіт, ${name}`);
// }
// greet("Василь");

//2. Напишіть функцію calculateArea, яка приймає довжину і ширину прямокутника і повертає його площу. Використайте цю функцію, щоб обчислити площу прямокутника зі сторонами 5 і 10.

// function calculateArea(height, width){
//     let result = height * width;
//     return result;
// }
// console.log(`Площа трикутинка дорівнює: ${calculateArea(5, 10)}`);

//.3 Напишіть функцію isEven, яка приймає число і повертає true, якщо число парне, і false, якщо число непарне. Використайте цю функцію, щоб визначити, чи є число 7 парним.

// function isEven(num){
//     if(num % 2 === 0){
//         console.log(true);
//     }else console.log(false);
// }
// isEven(7);

//4. Напишіть функцію convertTemperature, яка приймає температуру в градусах Цельсія і перетворює її на температуру в градусах Фаренгейта за формулою F = C * 9/5 + 32. Використайте цю функцію, щоб перетворити температуру 25 градусів Цельсія.

// function convertTemperature(temperature){
//     let farengeit = temperature * 9 / 5 + 32;
//     console.log(`Температура ${temperature} градусів за Цельсієм дорівнює ${farengeit} градусів за Фаренгейтом`); 
// }
// convertTemperature(25);

//5. Напишіть функцію isPrime, яка приймає число і повертає true, якщо число є простим, і false, якщо число не є простим. Використайте цю функцію, щоб визначити, чи є число 13 простим.

// function isPrime(number) {
// 	if (number <= 1) return false;

// 	for (let i = 2; i <= Math.sqrt(number); i++) {
// 	if (number % i === 0) {
// 		return false;
// 		}
// 	}

// 	return true; 
// 	}
// 	console.log(isPrime(23));  

//6. Напишіть функцію findFactorial, яка приймає число і повертає його факторіал. Факторіал числа n (означається як n!) визначається як добуток усіх цілих чисел від 1 до n. Наприклад, 5! = 5 * 4 * 3 * 2 * 1 = 120. Використайте цю функцію, щоб знайти факторіал числа 6.
// function findFactorial(num){
// 	let factorial = 1;
// 	for(let i = 1; i <= num; i++){
// 		factorial *= i;
// 	}
// 	console.log(`Факторіал ${num}! =  ${factorial}`);
// 	return factorial;
// }
// findFactorial(6);

//7. Напишіть функцію checkPrimeRange, яка приймає два числа - початкове та кінцеве значення діапазону - і виводить всі прості числа у цьому діапазоні. Використайте цю функцію, щоб знайти всі прості числа у діапазоні від 1 до 20.

// function isPrime(number) {
// 	if (number <= 1) return false;
// 	for (let i = 2; i <= Math.sqrt(number); i++) {
// 		if (number % i === 0) {
// 		return false;
// 		}
// 	}
// 	return true;
// }

// 	function checkPrimeRange(start, end) {
// 		for (let number = start; number <= end; number++) {
// 			if (isPrime(number)) {
// 			console.log(number);
// 		}
// 	}
// }
// checkPrimeRange(1, 20)

//Завдання зі статті
//Перепишіть функцію, щоб вона робила теж саме, але без if і в один рядок.
// Зробіть два варіанти функції checkAge:
// Використовуючи оператор ?
// Використовуючи оператор АБО ||
//function checkAge(age) {
	// if (age > 18) {
	// 	return true;
	//   } else {
	// 	return confirm('Батьки дозволили?');
	//   }
	// }

// function checkAge(age){
// 	return age > 18 ? console.log(true)  : confirm ('Батьки дозволили?');
// }
// checkAge(19);
// function checkAge(age){
// 	return (age > 18) || confirm('Батьки дозволили?');
// }
// checkAge(17);

//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function minNum(a, b){
// 	if(a < b){
// 		return a;
// 	} else return b
// }
// console.log(minNum(10, 15)); 

// function minNum(a, b){
// 	return (a < b) ? a : b;
// }
// console.log(minNum(10, 5));

//Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Інакше кажучи, множить число x саме на себе n разів і повертає результат.
// function pow(x, n) {
// 	let result = x;

// 	for (let i = 1; i < n; i++) {
// 	  result *= x;
// 	}

// 	return result;
// 	}
// console.log(pow(3, 2));

