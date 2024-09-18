import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Hero from './pages/Hero';
import About from './pages/About';

import { Navlayout } from './layout/Navlayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navlayout/>}>

            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
