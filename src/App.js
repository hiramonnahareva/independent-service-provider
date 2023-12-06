import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Checkout/Checkout';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login&Register/Login/Login';
import Register from './Pages/Login&Register/Register/Register';
import Notfound from './Pages/NotFound/Notfound';
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './RequireAuth';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/checkout' element={<RequireAuth><Checkout/></RequireAuth>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>

      <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
