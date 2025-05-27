import './App.css';
import BarraNavegacion from "./componenst/BarraNavegacion/BarraNavegacion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPrincipal from "./componenst/menuPrincipal/MenuPrincipal";
import CrearCuenta from "./componenst/Login/crearCuenta/CrearCuenta";
import Login from "./componenst/Login/Login";
import CodigoVerificacion from "./componenst/Login/codigoVerificacion/CodigoVerificacion";
import TarjetaProducto from "./componenst/pdv/components/tarjetasProducto/TarjetaProducto";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PDV from "./componenst/pdv/PDV";
import Productos from "./componenst/productos/Productos";
import Categorias from "./componenst/categorias/Categorias";
import Suministro from "./componenst/suministro/Suministro";
import Inventario from "./componenst/invetario/Inventario";

function App() {
  return (
      <Router>
          <header>
              <BarraNavegacion/>
              <Routes>
                  <Route path={"/"} element={<MenuPrincipal/>}/>
                  <Route path={"/login"} element={<Login/>}/>
                  <Route path={"/register"} element={<CrearCuenta/>}/>
                  <Route path={"/verification"} element={<CodigoVerificacion/>}/>
                  <Route path={"/pdv"} element={<PDV/>}/>
                  <Route path={"/products"} element={<Productos/>}/>
                  <Route path={"/category"} element={<Categorias/>}/>
                  <Route path={"/supply-per-unit"} element={<Suministro modo="unidad"/>}/>
                  <Route path={"/supply-per-box"} element={<Suministro modo="caja"/>}/>
                  <Route path={"/inventory"} element={<Inventario/>}/>
              </Routes>
          </header>
      </Router>
  );
}

export default App;