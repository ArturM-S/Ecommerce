import { createContext, ReactNode, useContext, useState } from 'react';

interface CartProviderProps {
    children: ReactNode;
}

interface CartContextData {
    cart: any;
    addItem: (item: any) => void;
    removeItem: (item: any) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState({ items: [] });
    // const [cart, setCart] = useState<[{ item: object; count: number }]>();
    console.log(cart.items);

    const addItem = item => {
        setCart({
            items: [...cart.items, item],
        });
    };

    const removeItem = item => {
        for (let i = 0; i < cart.items.length; i++) {
            if (cart.items[i].id === item) {
                cart.items.splice(i, 1);
                break;
            }
        }
        setCart({
            items: cart.items,
        });
    };

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): any {
    const context = useContext(CartContext);

    return context;
}
