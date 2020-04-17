const getCartProductIndex = (cart, id) => cart.findIndex(prdct => prdct.id === id); 
export default getCartProductIndex;