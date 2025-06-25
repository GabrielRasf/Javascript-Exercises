function product (productPrice, tax = 0.1, shipping = 0.05) {
    const calculateTax = productPrice * tax
    const calculateShipping = productPrice * shipping
    const totalPrice = productPrice + calculateTax + calculateShipping

    return totalPrice
}

console.log(product(100))
console.log(product(100, 0.3, 0.9))