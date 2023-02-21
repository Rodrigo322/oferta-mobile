import React, { createContext, useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
  userId: number;
}

interface Cart {
  products: Product[];
  productIds: number[];
}

interface CartContextData {
  cart: Cart;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  removeAllFromCart: () => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<Cart>({ products: [], productIds: [] });

  const addToCart = (product: Product) => {
    const productIndex = cart.productIds.findIndex((id) => id === product.id);

    if (productIndex === -1) {
      // Se o item ainda não está no carrinho, adiciona o item
      setCart({
        products: [...cart.products, product],
        productIds: [...cart.productIds, product.id],
      });
    } else {
      // Se o item já está no carrinho, atualiza a quantidade
      const newProducts = [...cart.products];
      newProducts[productIndex] = {
        ...newProducts[productIndex],
        quantity: newProducts[productIndex].quantity + 1,
      };

      setCart({
        products: newProducts,
        productIds: [...cart.productIds],
      });
    }
  };

  const removeFromCart = (productId: number) => {
    const productIndex = cart.productIds.indexOf(productId);
    if (productIndex >= 0) {
      const newProducts = [...cart.products];
      newProducts.splice(productIndex, 1);
      const newProductIds = [...cart.productIds];
      newProductIds.splice(productIndex, 1);
      setCart({ products: newProducts, productIds: newProductIds });
    }
  };

  const removeAllFromCart = () => {
    setCart({ products: [], productIds: [] });
  };

  const contextData = {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  };

  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  );
}
