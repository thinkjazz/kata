// Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.
// Task: Given the summary, find the number of pages n the book has.
// Example:
// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.
// Be aware that you'll get enormous books having up to 100.000 pages.
// All inputs will be valid.

// В каждой книге есть n страниц с номерами от 1 до n. Сводка (summary) составляется путем сложения количества цифр всех номеров страниц.
// Задача: Учитывая сводку, найдите количество страниц n в книге.
// Пример:
// Если на вход подано значение summary=25, то на выходе должно получиться n=17: Номера с 1 по 17 содержат 25 цифр: 1234567891011121314151617.
// Если на вход подано значение summary=5, то на выходе должно получиться n=5: Номера с 1 по 5 содержат 5 цифр: 12345.
// Имейте в виду, что вы получите огромные книги, содержащие до 100.000 страниц.
// Все вводимые данные будут действительными.

// 1. Разбиваем summary на последовательность цифр 13 = 1234567891011 = т.е n = 11;
// 2. Написать функцию которая принимает на вход число, которое является суммой всей последовательноти.
// Это число разбивается на последовательность от 1 до n, где n это количество цифр в этой последовательности
// Сводка составляется путём сложения количества цифр всех номеров страниц.
// Чтобы найти n надо отнимать от сводки количество цифр всех номеров страниц

// Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.
// Task: Given the summary, find the number of pages n the book has.
// Example:
// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.
// Be aware that you'll get enormous books having up to 100.000 pages.
// All inputs will be valid.
// The summary is made by adding the number of digits of all page numbers.
// To find n you have to subtract from the summary the number of digits of all page numbers
// Write a function that gets a number and return number of difits
// To find n need have to subtract from the summary the number of digits of all page numbers
//

function amountOfPages(summary) {

  const LIMITS = [1, 11, 192, 2893, 38894, 488894];

  const FOLD = [0, 9, 108, 1107, 11106, 111105];


  for (let [i, n] of LIMITS.entries()) {
    console.log(`${i + 1} limiter: ${n}`);
    if (n > summary) {
      summary += FOLD[i - 1];
      console.log(`${i + 1} fold: ${FOLD[i - 1]}`);
      console.log(Math.trunc(summary));
      console.log(i);
      return Math.trunc(summary / i);
    }
  }
}

console.log(amountOfPages(660));

// function findDigit(n){
//   let N = n.toString().length;
//   n *= N;
//   return n - ADDING[N - 1];
// }

// console.log(findDigit(1));

// The summary is made by adding the number of digits of all page numbers.
// To find n you have to subtract from the summary the number of digits of all page numbers
// Write a function that gets a number and return number of difits
// To find n need have to subtract from the summary the number of digits of all page numbers
//


function amountOfPages(summary){
  let counter = 1;
  let string = '';

  while(string.length < summary) {
    string += counter
    counter++
  }
  return counter - 1


}


function amountOfPages(summary){
  let n = 0
  for (var i = 1; n < summary; i++){
    n = n+=(i).toString().length;
  } return i-1;
  }


console.log(amountOfPages(25));



function amountOfPages(summary){
  let counter = 1;
  let string = '';

  while(string.length < summary) {
    console.log(string += counter)
    string += counter
    counter++
    console.log(counter++)
  }
  return counter - 1

}

console.log(amountOfPages(25));