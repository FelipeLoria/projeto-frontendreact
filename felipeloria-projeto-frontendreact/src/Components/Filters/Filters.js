import { ContainerFilter, Filter, Form, Input } from "./FiltersStyle"
import React from "react"

function Filters ({minFilter, onChangeMinFilter, maxFilter, onChangeMaxFilter, searchFilter, setSearchFilter, onChangeSearchFilter}) {
    
    return (
        <ContainerFilter>
            <Filter>Filters</Filter>
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