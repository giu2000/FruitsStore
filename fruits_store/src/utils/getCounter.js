const getCounter = products => products.reduce((counter, product) => counter + product.quantity, 0);
export default getCounter;