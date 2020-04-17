const getTotalPrice = products => products.reduce((total, product) => total + product.price * product.quantity, 0);
export default getTotalPrice;