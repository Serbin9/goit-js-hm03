// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function(employees) {
  let sellary = Object.values(employees);
  // console.table(sellary);
  let total = 0;
  for (let cost of sellary) {
    total += cost;
  }
  return total;

  // let sum = 0;
  // for(var i = 0; i < sellary.length; i++){
  //     sum += sellary[i];
  //     }
  // console.log(sellary);
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
