/* import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"; */
import Filters from "./Components/Filters/Filters";
import { GlobalStyle, Container } from "./GlobalStyle";
import Home from "./Components/ProductList/Home/Home";
import Cart from "./Components/ShoppingCart/Cart/Cart";
//import productList from "./Assets/productList"
import productList from "./Assets/product.List.json"
import { useState } from "react";

function App() {

  const [minFilter, setMinFilter] = useState (0)
  const [maxFilter, setMaxFilter] = useState (0)
  const [searchFilter, setSearchFilter] = useState ("")
  const [cart, setCart] = useState ("")
  const [amount, setAmount] = useState (0)

  return (
    <div>
      <GlobalStyle/>
{/*       <Header></Header> */}
      <Container>
        <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        ></Filters>
        <Home
        productList={productList}
        key={productList.id}
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        ></Home>
        <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart}
        ></Cart>
      </Container>
{/*       <Footer></Footer> */}
    </div>
  );
}

export default App;
