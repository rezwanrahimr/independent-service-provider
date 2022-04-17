import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
     </Routes>
    </div>
  );
}

export default App;
