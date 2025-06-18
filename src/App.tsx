import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agendar from "./pages/agendar"; // Ajusta se o caminho for diferente
import Home from "./pages/home"; // ou qual for tua página principal

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
