import React, { useEffect } from 'react';
import { BannerImagen } from "./componentes/Banner";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";

import { Footer } from "./componentes/Footer";
import 'boxicons';
import { Carrito } from "./componentes/Carrito";
import { ItemCount } from "./componentes/Contador";

function App() {
  return (
    <div className="App">
      <Header />
      <Carrito />
      <ItemCount />
      <BannerImagen />
      <ProductosLista />
      <Footer />
    </div>
  );
}

export default App;
