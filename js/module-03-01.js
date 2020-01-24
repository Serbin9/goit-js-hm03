// `use strict`
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

const key = Object.keys(user);
for (const key in user) {
  console.log(`key: ${key}; value: ${user[key]}`);
}

// const storage = {
//     items: [
//         { id: 'id-1', name: 'carrot', price: 30 },
//         { id: 'id-2', name: 'apple', price: 40 },
//         { id: 'id-3', name: 'cocumberce', price: 10 }
//     ],
//     getItems () {
//         return this.items;
//    },

// //    добавление продукта
// addProduct(products){
// this.items.push(products)
// }
// };
// console.table(storage.getItems());

// storage.addProduct({ id: 'id-4', name: 'babanas', price: 25 });
// console.table(storage.getItems());
// ================

// // const apper = {
// //     name: 'Vasilij',
// //     price: 30,
// //     discribe: 'white'

// // }
// // // apper.name = "Petja"
// // // console.log(apper.name);
// // // console.log(apper[`name`])
// // // const key = `price`
// // // console.log(key)
// // console.log(apper)
