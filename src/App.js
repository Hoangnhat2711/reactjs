
import './App.css';
import Header from './components/Header';
import Home from './pages/client/Home';
import ThanhToan from './pages/client/ThanhToan';
import { Routes ,Route } from 'react-router-dom';
import TimKiem from './pages/client/TimKiem';

function App() {
  return (
    <div className="App">
       <Header/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/thanhtoan" element={<ThanhToan />} />
         <Route path="/tim" element={<TimKiem/>} />
       </Routes>
    </div>
  );
}

export default App;
