import { ContainerFilter, Filter, Form, Input, Label } from "./FiltersStyle"
import React from "react"

function Filters ({minFilter, onChangeMinFilter, maxFilter, onChangeMaxFilter, searchFilter, setSearchFilter, onChangeSearchFilter}) {
    
    return (
        <ContainerFilter>
            <Filter>Filters</Filter>
            <Form>
                <Label>
                    <p>Valor Mínimo:      </p>
                    <Input value={minFilter} onChange={onChangeMinFilter}/>
                </Label>
                <Label>
                    <p>Valor Máximo:</p>
                    <Input value={maxFilter} onChange={onChangeMaxFilter} />
                </Label>
                <Label>
                    <p>Busca por nome:</p>
                    <Input value={searchFilter} onChange={onChangeSearchFilter} />
                </Label>
            </Form>
        </ContainerFilter>
    )
}

export default Filters