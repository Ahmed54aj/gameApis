// components
import Header from './components/Header';
import Footer from './components/Footer';
// styles
import './styles/App.css';
// react features
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// pages
import HomeSection from './components/pages/HomeSection';
import Zelda from './components/pages/Zelda/Zelda';
import Valorant from './components/pages/Valorant/Valorant';
import Pokedex from './components/pages/Pokemon/Pokedex';
// mhw weapons
import { Provider } from 'react-redux';
import monsterHunterWorldStore from './store/MonsterHunterWorldStore';
import MonsterHunterWorldWeapons from './components/pages/MonsterHunter/MhwWeapons/mhwWeapons';
import WeaponList from './components/pages/MonsterHunter/MhwWeapons/weaponList';
// context
// zelda
import { ZeldaProvider } from './Context/ZeldaContext';
// valorant
import { ValorantProvider } from './Context/ValorantContext';
import { PokemonProvider } from './Context/Pokemon';
// app component
function App() {
  return (
<>

<Header  />
<Router>

  <Routes>
  <Route exact path="/" element={<HomeSection/>} />
  <Route path="/zelda" element={<ZeldaProvider><Zelda /></ZeldaProvider>} />
  <Route path="/valorant" element={<ValorantProvider><Valorant /></ValorantProvider>} />
  <Route path="/mhwWeapons" element={<Provider store={monsterHunterWorldStore}><MonsterHunterWorldWeapons/></Provider>} />
  <Route path="/mhwWeapons/weaponList" element={< WeaponList />} />
  <Route path="/pokedex" element={<PokemonProvider><Pokedex /></PokemonProvider>} />
  </Routes>

    </Router>
<Footer />


</>
  );
}

export default App;
