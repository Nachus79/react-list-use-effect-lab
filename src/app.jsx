import { Navbar } from "./components/ui"
import { Routes, Route} from "react-router-dom";
import Home from './pages/home';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} /> {/* EL NOMBRE DEL COMPONENTE EN MAYÚSCULA */}
      </Routes>
    </>
  )
}

export default App;