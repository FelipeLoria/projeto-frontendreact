import React from "react"
import { CardContainer, ButtunAdicionar, Photo } from "./ProductCardStyled"

export function ProductCard ({productList, amount, setAmount, cart, setCart}) {

    const onChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const onChangeCart = (event) => {
        setCart(event.target.value)
    }

    return (
        <CardContainer>
            <Photo src={productList.imageUrl} alt=""></Photo>
            <p>{productList.name}</p>
            <p>Valor: {productList.value}</p>
            <ButtunAdicionar>Adicionar ao Carrinho</ButtunAdicionar>
        </CardContainer>
    )
}

export default ProductCard