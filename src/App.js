import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/shipping">
            <Shipping />
          </Route>

          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/place-order">
            <PlaceOrder />
          </Route>

          <Route path="/order/:id">
            <Orders />
          </Route>

          <Route path="/product/:productId">
            <ProductDetail />
          </Route>

          <Route path="/cart/:productId?">
            <Cart />
          </Route>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
