import { useState } from "react";
import { createContext } from "react";
 
export const MyStore = createContext();

export const ContextProvider = ({children}) => {

    const [isCardOpen, setIsCardOpen] = useState(false);
    const [cartItems, setcartItems] = useState([]);

    const stateValue = {
        isCardOpen,
        setIsCardOpen,
        cartItems, 
        setcartItems,
        
    };

    return <MyStore.Provider value={ stateValue }>{children}</MyStore.Provider>
}