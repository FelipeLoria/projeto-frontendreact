import Items from "../Items/Items"
import { CartContainer } from "./CartStyle"

export function Cart ({amount, setAmount, cart, setCart}) {
    return (
        <CartContainer>
            <h1>Cart</h1>
            <Items
                amount={amount}
                setAmount={setAmount}
                cart={cart}
                setCart={setCart}
            ></Items>
        </CartContainer>
    )
}

export default Cart