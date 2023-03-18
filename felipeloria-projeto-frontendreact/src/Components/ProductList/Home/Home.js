import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { HomeContainer, Produtos, Ordenação, Title, Cards } from "./HomeStyled"

export function Home ({productList, amount, setAmount, cart, setCart}) {

    const [ordination, setOrdination] = useState ("crescente")

    const onChangeOrdination = (event) => {
        setOrdination(event.target.value)
    }

    return (
        <HomeContainer>
            <Title>Quantidade de produtos: {productList.length}</Title>
            <Produtos>
                <Ordenação>
                    <p>Ordenação</p>
                    <select onChange={onChangeOrdination} name="tipo" id="tipo">
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </Ordenação>
            </Produtos>
            <Cards>
                {productList.map((productList)=>{
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