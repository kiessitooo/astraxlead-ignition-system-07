import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Index'
import Agendar from './pages/Agendar'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendar />} />
        {/* Rota catch‑all para páginas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
