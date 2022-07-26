import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Menu from './pages/Menu.js'
import NavbarLoggedIn from './components/NavbarLoggedIn'
import Register from './pages/Register.js'
import Login from './pages/Login.js'
import HiveDetail from './pages/HiveDetail.js'
import HiveDetailLoggedIn from './pages/HiveDetailLoggedIn.js'
import { ChakraProvider } from '@chakra-ui/react'

//jednoduche vyuzitie react routru na presmerovanie 

function App() {

  return  (
  <ChakraProvider>
    <Router>
      <Switch>
        <Route path="/" exact element={<Menu/>}/> 
        <Route path="/register" element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/hiveDetail' element={<HiveDetail/>}/>
        <Route path='/loggedIn' element={<NavbarLoggedIn/>}></Route>
        <Route path='/hiveDetailLoggedIn' element={<HiveDetailLoggedIn/>}/>
      </Switch>
    </Router>
  </ChakraProvider>
  
  );
}

export default App;

/*
   <Route path="/register" element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
*/