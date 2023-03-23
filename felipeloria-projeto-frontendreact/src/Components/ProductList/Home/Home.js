import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { HomeContainer, Ordenação, Title, Cards } from "./HomeStyled"

export function Home ({productList, amount, setAmount, cart, setCart, minFilter, maxFilter, searchFilter}) {

    const [ordination, setOrdination] = useState ("crescente")

    const onChangeOrdination = (event) => {
        setOrdination(event.target.value)
    }

    let numeroDeProdutos = 0

    for (let i = 0; i < productList.length; i++){
        if (productList[i].value > minFilter &&productList[i].value < maxFilter) {
          numeroDeProdutos = numeroDeProdutos +1
        }
    }

    return (
        <HomeContainer>
            <Title>Quantidade de produtos total: {numeroDeProdutos}</Title>
            <Ordenação>
                    <p>Ordenação</p>
                    <select onChange={onChangeOrdination} name="tipo" id="tipo">
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
            </Ordenação>
            <Cards>
                {productList
                .filter((productList)=>{
                    if (productList.value > minFilter) {
                        return productList
                    }
                }).filter((productList)=>{
                    if (productList.value < maxFilter) {
                        return productList
                    }
                }).filter((productList)=>{
                    return searchFilter? productList.name.includes(searchFilter):productList
                }).sort((a,b)=>{
                    if (ordination === "crescente") {
                        return a.value-b.value
                    }
                    if (ordination === "decrescente") {
                        return b.value-a.value
                    }
                })
                .map((productList)=>{
                    return (
                        <ProductCard
                            key={productList.id}
                            productList={productList}
                            amount={amount}
                            setAmount={setAmount}
                            cart={cart}
                            setCart={setCart}
                        ></ProductCard>
                    )
                })}
            </Cards>
        </HomeContainer>
    )
}

export default Home