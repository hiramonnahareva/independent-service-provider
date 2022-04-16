import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Common/Header/Header';
import Login from './Pages/Login&Register/Login/Login';
import Register from './Pages/Login&Register/Register/Register';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
    </div>
  );
}

export default App;
