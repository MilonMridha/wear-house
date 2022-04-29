
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Header from './Components/Shared/Header/Header';
import InventoryId from './InventoryId/InventoryId';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/inventory/:id' element={<InventoryId></InventoryId>}></Route>


      </Routes>
    </div>
  );
}

export default App;
