import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
// import Home from "./Components/Body/Home";
// import ProductsList from "./Components/Body/ProductsList";
import About from "./Components/Body/About";
import Product from "./Components/Navigation/Products";
import Cart from "./Components/Navigation/Cart";

const Home = lazy(() => import("./Components/Body/Home"));
const ProductsList = lazy(() => import("./Components/Body/ProductsList"));

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Routes className="routes">
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
