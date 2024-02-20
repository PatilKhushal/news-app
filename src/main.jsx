import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Entertainment from './components/Entertainment/Entertainment';
import Sports from './components/Sports/Sports';
import Technology from './components/Technology/Technology';
import Business from './components/Business/Business';
import Health from './components/Health/Health';
import Science from './components/Science/Science';
import { fetchNews } from './fetchData/fetchNews';
import PageNotFound from './components/Page Not Found/PageNotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/news-app/' element={<Root/>} errorElement={<PageNotFound/>}>
      <Route index element={<Home/>} loader={() => fetchNews('general')}/>
      <Route path='entertainment' element={<Entertainment/>} loader={() => fetchNews('entertainment')}/>
      <Route path='sports' element={<Sports/>} loader={() => fetchNews('sports')}/>
      <Route path='technology' element={<Technology/>} loader={() => fetchNews('technology')}/>
      <Route path='business' element={<Business/>} loader={() => fetchNews('business')}/>
      <Route path='health' element={<Health/>} loader={() => fetchNews('health')}/>
      <Route path='science' element={<Science/>} loader={() => fetchNews('science')}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
