import { useState } from "react"
import productList from "../../../Assets/productList"
import ItemsMain from "./ItemsStyle"

export function Items ({amount, setAmount, cart, setCart}) {

    function btnRemover(id) {
        const itemRemover = [...cart]

        const item = itemRemover.find((product) => product.id === id)

            if (item.quantity > 1) {
                item.quantity = item.quantity - 1;
                setCart(itemRemover)

            } else {
                const itemFiltrado = itemRemover.filter((product)=> product.id !== id)
                setCart(itemFiltrado)
            }
        } 

    return (
        <ItemsMain>
            {cart.map((cart)=>{
                return (
                    <div key={cart.id}>
                        <p>{cart.quantity}x {cart.name}</p>
                        <button onClick={() => btnRemover(cart.id)}>Remover</button>
                    </div>
                )
            })}
            <p>Valor Total: ${amount}</p>
        </ItemsMain>
    )
}

export default Items