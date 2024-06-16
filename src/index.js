import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MainContext from './context/MainContext';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import RegisterUser from './pages/RegisterUser';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/about-us',
    element:<AboutUs/>
  },
  {
    path:'/team',
    element:<Team/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/courses',
    element:<Courses/>
  },
  {
    path:'/user-registration',
    element:<RegisterUser/>
  }
])
root.render(
  <React.StrictMode>
    <MainContext>
      <RouterProvider router={allRoutes}/>

    </MainContext>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
