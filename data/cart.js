export const cart = []; //this variable can be used outside cart.js

export function addToCart(productId){
    let matchingItem;

        cart.forEach((cartItem) => {  // product check alredy in the cart
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            matchingItem.Quantity += 1;
        }else{
            cart.push({
                productId: productId,
                Quantity: 1
            }); // add to cart array in cart.js
        }
}