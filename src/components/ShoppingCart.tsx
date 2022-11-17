import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type isOpenType = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: isOpenType) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />;
                    })}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
