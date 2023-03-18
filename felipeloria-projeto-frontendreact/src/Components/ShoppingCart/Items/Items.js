export function Items ({amount, setAmount, cart, setCart}) {

    const onChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const onChangeCart = (event) => {
        setCart(event.target.value)
    }

    return (
        <div>
            <p>x0 Nome do Produto</p>
            <select>Remover</select>
            <p>Valor Total: 0</p>
        </div>
    )
}

export default Items