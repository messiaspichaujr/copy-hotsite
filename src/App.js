import './App.css';
import { BrowserRouter, Routes, Route } from "react";
import Home from './pages/Home/Home';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

console.log({ Home, Navbar, Footer });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;