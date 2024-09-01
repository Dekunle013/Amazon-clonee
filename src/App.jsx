import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Catalogue from "./components/Catalogue";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage"; // You'll need to create this component

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App