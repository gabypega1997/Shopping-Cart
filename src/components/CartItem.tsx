import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Offcanvas, Stack } from "react-bootstrap";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find((i) => i.id === id);
    if (item === null) return null;

    return (
        <Stack gap={2} direction="horizontal">
            <img
                src={item?.imgUrl}
                alt={item?.name}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
        </Stack>
    );
}
