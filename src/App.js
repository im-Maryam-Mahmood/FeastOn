import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home';
import Login from './screens/Login.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css' 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle' 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js' 
import Signup from '../src/screens/Singnup.js'
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/createuser" element={<Signup />} /> 
          <Route exact path="/loginuser" element={<Login />} /> 
          <Route exact path="/myorder" element={<MyOrder />} />

        </Routes>
      </div>
    </Router>

    </CartProvider>
  );
}

export default App;
