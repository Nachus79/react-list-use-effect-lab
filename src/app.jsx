import { Navbar } from "./components/ui"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} /> {/* EL NOMBRE DEL COMPONENTE EN MAYÚSCULA (NECESITO MÁS CAFÉ) */}
      </Routes>
    </>
  )
}

export default App;

/*Iteración 2: Componente PageLayout
La página que acabamos de construir, junto con las próximas que crearemos, no respetan los márgenes de CSS. En esta iteración, crearemos un componente llamado PageLayout que solucionará este problema.

📂 Ubicación: components/layouts/page-layout

Usa un contenedor de Bootstrap para definir el diseño.
Establece los márgenes necesarios. */