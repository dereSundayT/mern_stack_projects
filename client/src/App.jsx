
import "./App.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from './pages/watch/Watch'
import {BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const user = true
  return (
    <BrowserRouter>
     <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route index element={<Home/>} />
          <Route path="movies" element={<Home type='movies'/>} />
          <Route path="series" element={<Home type='series'/>} />
          <Route path="watch" element={<Watch/>}/> 
          <Route path="*" element={<Watch />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
      
       
  )
}

export default App;
