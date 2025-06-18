import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Agendar from './pages/agendar';

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

