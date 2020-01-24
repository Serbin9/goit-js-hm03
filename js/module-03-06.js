// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.
"use strict";
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(allProdcuts, productName) {
  let totalVelue = 0;
  for (let i = 0; i < allProdcuts.length; i++) {
    if (productName === products[i].name) {
      totalVelue = allProdcuts[i].price * allProdcuts[i].quantity;
    }
  }
  return totalVelue;

  //   for( const productName in products);
  // console.log(naproductNameme)
  // for (const pricepw in products)
  // console.log(pricepw)

  // let priceOff = Object.values(products);
  // console.log(products[name]);
  // let priceoff = Object.values()

  // let number = Object.values(products[quantity]);
  // let priceQuantity = number*priceOff;
  // console.log(priceQuantity)
  // return

  // const vasja = Object.keys(products);
  // console.log(vasja[key])

  //   for( const productsName in products);
  // let nameProduct = Object.keys(productName);
  // console.log(productsName)

  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
