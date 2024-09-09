import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Catalogue from "./components/Catalogue";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import OrdersPage from "./components/OrdersPage";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/home" element={<Catalogue />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App