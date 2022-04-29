
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import Header from './Components/Shared/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import InventoryId from './InventoryId/InventoryId';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/inventory/:id' element={<InventoryId></InventoryId>}></Route>
          <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>


      </Routes>
    </div>
  );
}

export default App;
