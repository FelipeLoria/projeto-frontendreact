import React from "react"
import { CardContainer, ButtunAdicionar, Photo } from "./ProductCardStyled"

export function ProductCard ({productList, amount, setAmount, cart, setCart}) {

    const onChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const onChangeCart = (event) => {
        setCart(event.target.value)
    }

    function btnAdicionar(id) {
        const itemAdicionado = [...cart]

        const item = itemAdicionado.find((product) => product.id === productList.id)
    
        if (!item) {
            itemAdicionado.push({ id: productList.id, name: productList.name, value: productList.value, quantity: 1})
        } else {
            item.quantity = item.quantity + 1;
        }

        setCart(itemAdicionado)
    }

    return (
        <CardContainer>
            <Photo src={productList.imageUrl} alt=""></Photo>
            <p>{productList.name}</p>
            <p>Valor: {productList.value}</p>
            <ButtunAdicionar onClick={() => btnAdicionar(productList.id)} value={productList.id}>Adicionar ao Carrinho</ButtunAdicionar>
        </CardContainer>
    )
}

export default ProductCard