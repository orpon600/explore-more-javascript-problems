const phones = [
  {
    name: "Sumsung",
    camara: 12,
    Storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Walton",
    camara: 10,
    Storage: "32gb",
    price: 22000,
    color: "silver",
  },
  { name: "iphone", camara: 12, Storage: "32gb", price: 82000, color: "black" },
  { name: "Xaomi", camara: 20, Storage: "32gb", price: 52000, color: "silver" },
  { name: "Oppo", camara: 22, Storage: "32gb", price: 20000, color: "red" },
  { name: "Nokia", camara: 10, Storage: "32gb", price: 44000, color: "silver" },
  { name: "HTC", camara: 12, Storage: "32gb", price: 62000, color: "silver" },
];

// function cheapestPhone(phones) {
//   let cheapest = phones[0];
//   for (let i = 0; i < phones.length; i++) {
//     const phone = phones[i];
//     if (phone.price < cheapest.price) {
//       cheapest = phone;
//     }
//   }
//   return cheapest;
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);
//
//
function bigCamara(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.camara > cheapest.camara) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = bigCamara(phones);
console.log(mySelection);
