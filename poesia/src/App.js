import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/index.js'
import BookList from './pages/bookPage.js'
import About from './pages/About';
import Menu from './pages/Menu';
import Dropdown from './components/Dropdown';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Poems from './components/Poems';
import Chapter from './components/Chapter';


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    const hideMenu = ()=>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false);
      }      
    };
    window.addEventListener('resize', hideMenu);
    return () =>{
      window.removeEventListener('resize', hideMenu);
    };

  })

  return (
    <div className="App">
      <Router>
      <Navbar toggle = {toggle}/>

      <Dropdown isOpen= {isOpen} toggle = {toggle}/>
        <Routes>
          <Route
            path='/' 
            element={
              <Home />
          }
          />
          <Route
            path='/content' 
            element={
              <BookList/>
          }
          />
          <Route
            path='/about' 
            element={
              <About/>
          }
          />
          <Route
            path='/menu' 
            element={
              <Menu/>
          }
          />
          <Route
            path='/book/:code' 
            element={
              <Poems/>
          }
          />
          <Route
            path='/book/:code/:chapter' 
            element={
              <Chapter/>
          }
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
