import React from 'react';
import './App.css';
import "primereact/resources/themes/nova-dark/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from './Components/Header';
import RoomInventory from './Components/RoomInventory'
import GraphPlaceholder from './Components/GraphPlaceholder'
import PersonalInventory from './Components/Inventory'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <RoomInventory />
      <div className="lower">
        <GraphPlaceholder />
        <PersonalInventory />
      </div>
      <Footer />
    </div>
  );
}

export default App;
