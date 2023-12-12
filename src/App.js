import React from 'react'
import  {BrowserRouter, Routes, Route } from 'react-router-dom';
import './server'
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';
import About from './Pages/About';
import VansList from './Pages/vansList';
import VanDetail from './Pages/VanDetail';


function App (){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/> 
            <Route path='vans' element={<VansList/>}/> 
            <Route path='/vans/:id' element={<VanDetail/>}/> 
          </Route>                    
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;