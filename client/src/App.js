import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { PlantList } from './components/PlantList';
import { Add } from './components/Add';
import './App.css';
import "./lib/fontawesome-free-6.1.1-web/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plantlist/*" element={<PlantList />} />
        <Route path="/add/*" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
