import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
// import Home from "./Components/Body/Home";
// import ProductsList from "./Components/Body/ProductsList";
// import About from "./Components/Body/About";
// import Product from "./Components/Navigation/Products";
import Cart from "./Components/Navigation/Cart";
import AnimatedRoutes from "./Components/AnimatedRoutes.jsx";
import Product from "./Components/Navigation/Products";
const About = lazy(() => import("./Components/Body/About"));
const Home = lazy(() => import("./Components/Body/Home"));
const ProductsList = lazy(() => import("./Components/Body/ProductsList"));

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Suspense>
          <AnimatedRoutes />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
