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
