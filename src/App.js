import React from 'react';
import { BannerImagen } from "./componentes/Banner";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import { Footer } from "./componentes/Footer";
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerImagen />
      <ProductosLista />
      <Footer />
    </div>
  );
}

export default App;
