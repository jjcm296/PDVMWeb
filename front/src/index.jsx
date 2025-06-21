import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {ProductosProvider} from "./context/productosContext.jsx";
import {CategoriasProvider} from "./context/categoriaContext.jsx";
import {CarritoProvider} from "./context/carritoContext.jsx";
import {InventarioProvider} from "./context/invetarioContext.jsx";
import {SuministroProductosProvider} from "./context/suministroProductosContext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProductosProvider>
          <CategoriasProvider>
              <CarritoProvider>
                <InventarioProvider>
                    <SuministroProductosProvider>
                        <App />
                    </SuministroProductosProvider>
                </InventarioProvider>
              </CarritoProvider>
          </CategoriasProvider>
      </ProductosProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
