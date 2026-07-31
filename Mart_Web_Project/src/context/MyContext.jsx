import { useState } from "react";
import { createContext } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const [registeredUsers, setregisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [loggedUser, setloggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser"))
  );

  console.log("register ->", registeredUsers);
  console.log("login ->", loggedUser);

  const incQuantity = (id) => {
    setcartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decQuantity = (id) => {
    setcartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  };

  const remItem = (id) => {
    setcartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const tPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const stateValue = {
    isCardOpen,
    setIsCardOpen,
    cartItems,
    setcartItems,
    incQuantity,
    decQuantity,
    remItem,
    tPrice,
    registeredUsers,
    setregisteredUsers,
    loggedUser,
    setloggedUser,
  };

  return <MyStore.Provider value={stateValue}>{children}</MyStore.Provider>;
};
