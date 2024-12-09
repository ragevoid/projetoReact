import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa os componentes necessários para rotas
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Story from './pages/Story.jsx'; 
import UltimoJogo from './pages/UltimoJogo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Navigation />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Página inicial */}
            <Route path="/story" element={<Story />} /> {/* Historia*/}
            <Route path="/last" element={<UltimoJogo />} /> {/* Ultimo Jogo */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </StrictMode>
);
