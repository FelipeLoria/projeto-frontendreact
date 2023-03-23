import { MainHeader, NomeLoja, Login, Logo, Marca } from "./HeaderStyled"

function Header () {
    return (
        <MainHeader>
            <Marca>
                <Logo src="https://cdn-icons-png.flaticon.com/128/2240/2240730.png"></Logo>
                <NomeLoja>SpaceTshirts</NomeLoja>
            </Marca>
            <Login>Login</Login>
        </MainHeader>
    )
}

export default Header