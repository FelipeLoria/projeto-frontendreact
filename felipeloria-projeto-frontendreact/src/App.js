import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Filters from "./Components/Filters/Filters";
import { GlobalStyle, Container } from "./GlobalStyle";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import productList from "./Assets/productList"
import { useState } from "react";

function App() {

  const [minFilter, setMinFilter] = useState (0)
  const [maxFilter, setMaxFilter] = useState (1000)
  const [searchFilter, setSearchFilter] = useState ("")
  const [cart, setCart] = useState ([])
  const [amount, setAmount] = useState (0)

  const onChangeMinFilter = (event) => {
    setMinFilter(event.target.value)
  }

  const onChangeMaxFilter = (event) => {
    setMaxFilter(event.target.value)
  }

  const onChangeSearchFilter = (event) => {
    setSearchFilter(event.target.value)
  }

  return (
  <div style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=600")` 
    }}>
      <GlobalStyle/>
        <Header></Header>
        <Container>
          <Filters
          minFilter={minFilter}
          onChangeMinFilter={onChangeMinFilter}
          maxFilter={maxFilter}
          onChangeMaxFilter={onChangeMaxFilter}
          searchFilter={searchFilter}
          onChangeSearchFilter={onChangeSearchFilter}
          ></Filters>
          <Home
          productList={productList}
          key={productList.id}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          minFilter={minFilter}
          maxFilter={maxFilter}
          searchFilter={searchFilter}
          ></Home>
          <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          ></Cart>
        </Container>
        <Footer></Footer>
    </div>
  );
}

export default App;
