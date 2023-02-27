import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductContainer from "./Components/ProductContainer";
import CartContainer from "./Components/CartContainer";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { useState } from "react";

function App() {
  const [tab,setTab] = useState(true)
  return (
    <Provider store={store}>
      <header>
        <Navbar setTab={setTab}/>
      </header>
      <main className="py-16">
        {
          tab ? <ProductContainer  /> : <CartContainer />
        }
        
        
      </main>
    </Provider>
  );
}

export default App;
