import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import Home from './components/home';
import { BrowserRouter as Router,Route,Routes,} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='Home' element={<Home/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
