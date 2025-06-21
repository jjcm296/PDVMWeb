import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { ProductosProvider } from './context/productosContext.jsx';
import { CategoriasProvider } from './context/categoriaContext.jsx';
import { CarritoProvider } from './context/carritoContext.jsx';
import { InventarioProvider } from './context/invetarioContext.jsx';
import { SuministroProductosProvider } from './context/suministroProductosContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
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
    </StrictMode>
);
