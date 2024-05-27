import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import National from './pages/National';

function App() {
  return (
    <div>
      <Header/>
       
       <Footer/>




       {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        
          <Route path="/National" element={<National />} />
         
        
      </Routes>
    </BrowserRouter>  */}
    </div>
  );
}

export default App;
