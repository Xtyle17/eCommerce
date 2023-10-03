import { lazy, Suspense, useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer/Footer";
// import Home from "./Components/Body/Home";
// import ProductsList from "./Components/Body/ProductsList";
// import About from "./Components/Body/About";
// import Product from "./Components/Navigation/Products";
import AnimatedRoutes from "./Components/AnimatedRoutes.jsx";
import { CartContext, CartProvider } from "./Components/Provider/cartProvider";
const About = lazy(() => import("./Components/Body/About"));
const Home = lazy(() => import("./Components/Body/Home"));
const ProductsList = lazy(() => import("./Components/Body/ProductsList"));
const Register = lazy(() => import("./Components/Navigation/Register"));
const login = lazy(() => import("./Components/Navigation/login"));

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-center">
      <CartProvider>
        <div className="App">
          {isLoggedIn ? (
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
          {/* <Header />
          <Nav />
          <main>
            <Suspense fallback={<div>loading..</div>}>
              <AnimatedRoutes />
            </Suspense>
          </main> */}
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
