// default parameters
export const isUserSignedIn = (userName = 'NO NAME'): void => {
  console.log(userName);
};

// rest parameters
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number): number => {
    return prevTotal + productPrice;
  }, 0);
};
