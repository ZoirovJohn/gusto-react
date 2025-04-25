import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItemType } from "../../lib/types/search";

type BasketContextType = {
  cartItems: CartItemType[];
  onAdd: (input: CartItemType) => void;
  onRemove: (input: CartItemType) => void;
  onDelete: (input: CartItemType) => void;
  onDeleteAll: () => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  // Load cart from localStorage once
  useEffect(() => {
    const cartJson = localStorage.getItem("cartData");
    if (cartJson) {
      setCartItems(JSON.parse(cartJson));
    }
  }, []);

  // Always update localStorage when cartItems changes
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (input: CartItemType) => {
    const exist = cartItems.find((item) => item._id === input._id);
    const cartUpdate = exist
      ? cartItems.map((item) =>
          item._id === input._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cartItems, { ...input, quantity: 1 }];
    setCartItems(cartUpdate);
  };

  const onRemove = (input: CartItemType) => {
    const exist = cartItems.find((item) => item._id === input._id);
    if (exist) {
      const cartUpdate =
        exist.quantity === 1
          ? cartItems.filter((item) => item._id !== input._id)
          : cartItems.map((item) =>
              item._id === input._id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
      setCartItems(cartUpdate);
    }
  };

  const onDelete = (input: CartItemType) => {
    const cartUpdate = cartItems.filter((item) => item._id !== input._id);
    setCartItems(cartUpdate);
  };

  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cartData");
  };

  return (
    <BasketContext.Provider
      value={{ cartItems, onAdd, onRemove, onDelete, onDeleteAll }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
