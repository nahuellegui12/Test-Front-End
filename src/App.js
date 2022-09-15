import React, { useEffect } from 'react';
import { BannerImagen } from "./componentes/Banner";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import { Footer } from "./componentes/Footer";
import 'boxicons';
import { ItemCount } from "./componentes/Contador";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemCount />
      <BannerImagen />
      <ProductosLista />
      <Footer />
    </div>
  );
}

export default App;
