import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import TeamInfo from './components/TeamInfo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
    <Header/>
    <Navigation/>
    <main className="flex-grow-1">
    <Home/>
    </main>
    <Footer/>
    </div>
  </StrictMode>,
)