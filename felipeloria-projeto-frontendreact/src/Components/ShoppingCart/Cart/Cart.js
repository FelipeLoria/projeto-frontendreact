import Items from "../Items/Items"
import { CartContainer, Carro } from "./CartStyle"

export function Cart ({amount, setAmount, cart, setCart}) {

    for (let i = 0; i < cart.length; i++){
        amount = amount + cart[i].value*cart[i].quantity
    }

    return (
        <CartContainer>
            <Carro>Carrinho</Carro>
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