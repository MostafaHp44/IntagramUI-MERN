import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './compomnents/LoginWithFacebook/login';
import Main from './main';

function App() {
  return (
    <div className="App">
    

    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/loginwithfacebook' element={<Login/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
