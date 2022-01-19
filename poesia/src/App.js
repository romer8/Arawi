import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';
import Content from './components/Content';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path='/' 
            element={
              <>
              <Navbar/>
              <Hero/>
              </>
          }
          />
          <Route
            path='/content' 
            element={
              <>
              <Content/>
              </>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
