// Напиши функцию findBestEmployee(employees), которая принимает объект
// сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function(employees) {
  const key = Object.keys(employees);
  for (const key in findBestEmployee);
  {
    console.log(key);
    const valueExx = Object.values(employees);
    console.log(valueExx);
    const max = Math.max(...valueExx);
    console.log(max);
    return `name: ${key[valueExx.indexOf(max)]} ; к-во задач ${max}`;
  }
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
