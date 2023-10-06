import React from 'react';
import Dashboard from './pages/Dashboard';
import Footer from './partials/Footer';
import Header from './partials/Header';
import SideBar from './partials/SideBar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;