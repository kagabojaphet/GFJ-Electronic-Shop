import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router,Route,Routes,} from 'react-router-dom';
import All from "./pages/All";
import BuyPro from './pages/Buy';
import Login from './components/login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/All' element={<All/>}></Route>
        <Route path='/Buy' element={<BuyPro/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;