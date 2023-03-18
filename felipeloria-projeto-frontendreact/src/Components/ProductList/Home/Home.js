import { useCallback, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { HomeContainer, Produtos, Ordenação, Title, Cards } from "./HomeStyled"

export function Home ({productList}) {

    const [ordination, setOrdination] = useState ("crescente")

    const onChangeOrdination = (event) => {
        setOrdination(event.target.value)
    }

    console.log(ordination)

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
                        ></ProductCard>
                    )
                })}
            </Cards>
        </HomeContainer>
    )
}

export default Home