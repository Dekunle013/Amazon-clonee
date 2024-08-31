import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Catalogue from "./components/Catalogue";
import Footer from "./components/Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Nav />
      <Catalogue searchQuery={searchQuery} />
      <Footer />
    </>
  );
}

export default App;
