// Ett produkt-interface
enum Color {
    Black,
    White,
    Magenta,
    Cyan,
}
interface Product {
    id: number;
    name: string;
    price: number;
    color?: Color;
}

// Ett interface för products-arrayen
// extends Array<object> för att få tillgång till .push och
// andra metoder

interface Products extends Array<object> {
    [index: number]: Product;
}

// Sätt både products och cart till värdet av tomma arrayer.
let products: Products = [];
let cart: Products = [];

let toyCar: Product = {
    id: 3,
    name: "Toycar AE-12",
    price: 39.39,
};

let fuzzyAnimal: Product = {
    id: 1,
    name: "Adorable fuzzy animal",
    price: 120,
    color: Color.Cyan,
};

function addProduct(product: Product): void {
    products.push(product);
}

function addToCart(product: Product): void {
    let index = products.findIndex((p) => {
        return p == product;
    });
    cart.push(products.splice(index, 1));
}

// function getTotalPrice(cart: Products): number {
//     let total = cart.reduce((acc, product) => {
//         return (acc += product.price);
//     }, 0);
//     return total;
// }

addProduct(toyCar);
addProduct(fuzzyAnimal);

console.log("P: " + products.length);
console.log("C: " + cart.length);

addToCart(toyCar);

console.log("P efter trade: " + products.length);
console.log("C efter trade: " + cart.length);

(window as any).products = products;
(window as any).addToCart = addToCart;