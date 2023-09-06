import { lazy, Suspense, useContext } from "react";
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
import { CartContext } from "./Components/Provider/cartProvider";
import { CartProvider } from "./Components/Provider/cartProvider";
const About = lazy(() => import("./Components/Body/About"));
const Home = lazy(() => import("./Components/Body/Home"));
const ProductsList = lazy(() => import("./Components/Body/ProductsList"));
const Register = lazy(() => import("./Components/Navigation/Register"));
const login = lazy(() => import("./Components/Navigation/login"));

function App() {
  // const { isLoggedIn } = useContext(CartContext);
  const one = true;
  return (
    <CartProvider>
      <div className="App">
        {true ? (
          <>
            <Header />
            <Nav />
            <main>
              <Suspense fallback={<div>loading..</div>}>
                <AnimatedRoutes />
              </Suspense>
            </main>
          </>
        ) : (
          <Register />
        )}
      </div>
    </CartProvider>
  );
}

export default App;
