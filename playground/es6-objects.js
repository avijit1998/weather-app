let name = "avijit";
let userAge = 22;

//object shorthand property

const user = {
  name,
  age: userAge,
  location: "India",
};

console.log(user);

//object destructuring

const product = {
  label: "orange juice",
  price: 20,
  stock: 300,
  salePrice: undefined,
};

const { label: productLabel, stock, rating = 3 } = product;

console.log(productLabel);
console.log(rating);

const transaction = (type, { label, price, stock }) => {
  console.log(type, label, stock, price);
};

transaction("order", product);
