import './App.css';
import BarraNavegacion from "./componenst/BarraNavegacion/BarraNavegacion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPrincipal from "./componenst/menuPrincipal/MenuPrincipal";
import CrearCuenta from "./componenst/Login/crearCuenta/CrearCuenta";
import Login from "./componenst/Login/Login";
import CodigoVerificacion from "./componenst/Login/codigoVerificacion/CodigoVerificacion";
import TarjetaProducto from "./componenst/tarjetasProductos/tarjetaProducto/TarjetaProducto";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
                  <Route path={"/products"} element={<TarjetaProducto/>}/>

              </Routes>
          </header>
      </Router>
  );
}

export default App;