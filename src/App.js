import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router,Route,Routes,} from 'react-router-dom';
import All from "./pages/All";
import BuyPro from './pages/Buy';
import Login from './components/login';
import Admin from './components/Admin/Administor';
import TableUSer from './components/Admin/UserTable';
import Add from './components/AddToCart';
import AddtoCartProps from './components/AddProps';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/All' element={<All/>}></Route>
        <Route path='/Buy' element={<BuyPro/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/Table' element={<TableUSer/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
        <Route path='/AddProps'  element={<AddtoCartProps/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;