function discount(price, discountPercentage) {
  let result = price - price * (discountPercentage / 100)
  console.log(result);
  return result
}
discount(123,15)
discount(100,10)
discount(5000,50)