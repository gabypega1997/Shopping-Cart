import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find((i) => i.id === id);
    if (item === null) return null;

    return (
        <Stack
            gap={2}
            direction="horizontal"
            className="d-flex align-items-center"
        >
            <img
                src={item?.imgUrl}
                alt={item?.name}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item?.name}{" "}
                    {quantity > 1 && (
                        <span
                            className="text-muted"
                            style={{ fontSize: "0.6rem" }}
                        >
                            x{quantity}{" "}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item!.price)}
                </div>
            </div>
            <div>{formatCurrency(item!.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item!.id)}
            >
                X
            </Button>
        </Stack>
    );
}
