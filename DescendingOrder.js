// Make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
// Создайте функцию, которая может принимать в качестве аргумента любое целое неотрицательное число и возвращать его с цифрами в порядке убывания. По сути, переставляйте цифры, чтобы создать максимально возможное число.


    function descendingOrder(n) {
        return parseInt(n.toString().split('').sort().reverse().join(''));
    }


  console.log(descendingOrder(145263));