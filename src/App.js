import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Bookscreen from './screens/Bookscreen.js';
import Contact from './screens/contact.js';
import Homescreen from './screens/Homescreen.js';
import Hostscreen from './screens/Hostscreen.js';
import Registerscreen from './screens/Registerscreen.js';
import Signinscreen from './screens/Signinscreen.js';
import Startscreen from './screens/Startscreen.js';
const App = () => {
    return(
<BrowserRouter>
    <div> 
    <Routes>
    <Route path="/" element={<Startscreen />} exact></Route>
    <Route path="/home" element={<Homescreen />}></Route>
    <Route path="/book" element={<Bookscreen />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/signin" element={<Signinscreen />}></Route>
    <Route path="/register" element={<Registerscreen />}></Route>
    <Route path="/about" element={<AboutUs />}></Route>
    <Route path="/hosts" element={<Hostscreen />}></Route>
        </Routes>
  </div>
  </BrowserRouter>
        )
}

export default App;