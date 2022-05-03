
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './Components/AddNewItem/AddNewItem';
import Home from './Components/Home/Home';

import Login from './Components/Login/Login';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import Footer from './Components/Shared/Footer/Footer';

import Header from './Components/Shared/Header/Header';
import RequiredAuth from './Components/Shared/RequirAuth/RquirAuth';
import SignUp from './Components/SignUp/SignUp';
import InventoryId from './InventoryId/InventoryId';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequiredAuth>
            <InventoryId></InventoryId>
          </RequiredAuth>}></Route>

        <Route path='/manage' element={
          <RequiredAuth>
            <ManageInventory></ManageInventory>
          </RequiredAuth>}></Route>

        <Route path='/add' element={<RequiredAuth>
          <AddNewItem></AddNewItem>
        </RequiredAuth>}></Route>
        
        <Route path='/myitem' element={<RequiredAuth>
          <MyItems></MyItems>
        </RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
