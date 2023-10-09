import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import TiposEgresos from './pages/TiposEgresos';
import TiposPago from './pages/TiposPago';
import Footer from './partials/Footer';
import Header from './partials/Header';
import SideBar from './partials/SideBar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/tiposEgresos" element={<TiposEgresos />} />
            <Route path="/tiposPago" element={<TiposPago />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;