import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx';
import TeamInfo from './components/TeamInfo.jsx';
import Fixture from './components/Fixture.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Navigation/>
    <Fixture/>
    <TeamInfo/>
  </StrictMode>,
)
