import { ContainerFilter, Form, Input } from "./FiltersStyle"
import React from "react"

function Filters ({minFilter, setMinFilter, maxFilter, setMaxFilter,searchFilter, setSearchFilter}) {
    
    const onChangeMinFilter = (event) => {
        if (event.target.value >= 0) {
        setMinFilter(event.target.value)
        } else {
            alert ("O valor não pode ser negativo")
        }
    }

    const onChangeMaxFilter = (event) => {
        if (event.target.value >= 0) {
            setMaxFilter(event.target.value)
        } else {
            alert ("O valor não pode ser negativo")
        }
    }

    const onChangeSearchFilter = (event) => {
        setSearchFilter(event.target.value)
    }

    return (
        <ContainerFilter>
            <h1>Filters</h1>
            <Form>
                <label>
                    Valor Mínimo:
                    <Input value={minFilter} onChange={onChangeMinFilter}/>
                </label>
                <label>
                    Valor Máximo:
                    <Input value={maxFilter} onChange={onChangeMaxFilter} />
                </label>

                <label>
                    Busca por nome:
                    <Input value={searchFilter} onChange={onChangeSearchFilter} />
                </label>
            </Form>
        </ContainerFilter>
    )
}

export default Filters