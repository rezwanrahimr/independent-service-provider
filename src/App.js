import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';
import CheckOut from './components/CheckOut/CheckOut';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Toaster/>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
