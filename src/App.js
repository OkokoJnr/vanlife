import React from 'react'
import './App.css'
import  {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './server'
import Home from './Pages/Home';
import About from './Pages/About';
import VansList, {loader, loader as vanListLoader} from './Pages/vansList';
import VanDetail, {loader as VanDetailLoader} from './Pages/VanDetail';
import Layout from './Components/Layout';
import HostLayout from './Components/HostLayout';
import HostDashboard from './Pages/HostDashboard';
import Income from './Pages/Income'
import Review from './Pages/Review'
import HostVans from './Pages/HostVans';
import HostVansDetail from './Pages/HostVansDetail';
import HostVansDetailsInfo from './Pages/HostVansDetailsInfo';
import HostVansDetailPricing from './Pages/HostVansDetailPricing';
import HostVansDetailPhoto from './Pages/HostVansDetailPhoto';
import NotfoundError from './Pages/NotfoundError';
import ErrorElement from './Pages/ErrorElement';
import Login from './Pages/Login';

function App (){

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='*' element={<NotfoundError/>}/>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/> 
            <Route path='vans' element={<VansList/>} loader={vanListLoader} errorElement={<ErrorElement/>}/> 
            <Route path='vans/:id' element={<VanDetail/>} loader={VanDetailLoader}/> 
            <Route path='host' element={<HostLayout/>}>
              <Route index element={<HostDashboard/>}/>
              <Route path='review' element={<Review/>}/>
              <Route path='income' element={<Income/>}/>
              <Route path='vans' element={<HostVans/>}/>
              <Route path='vans/:id' element={<HostVansDetail/>}>
                <Route index element={<HostVansDetailsInfo/>}/>
                <Route path='pricing' element={<HostVansDetailPricing/>}/>
                <Route path='photos' element={<HostVansDetailPhoto/>}/>
              </Route>
            </Route>
          </Route>
  ))

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}


export default App;