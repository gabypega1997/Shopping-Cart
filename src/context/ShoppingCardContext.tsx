import { createContext, ReactNode, useContext } from "react";
type ShoppingCardProviderProps = {
    children: ReactNode;
};
const ShoppingCardContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCardContext);
}

export function ShoppingCardProvider({ children }: ShoppingCardProviderProps) {
    return (
        <ShoppingCardContext.Provider value={{}}>
            {children}
        </ShoppingCardContext.Provider>
    );
}
