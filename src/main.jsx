import React from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import { Toaster } from 'sonner';

import App1 from './components/Ejercicio 1/Ejercicio1.jsx';
// import App2 from './components/Ejercicio 2/Ejercicio2.jsx';
// import NewMessage from './components/Ejercicio 3/Ejercicio3.jsx';
// import TodoList from './components/Ejercicio 4/Ejercicio4.jsx';
// import TodoListWithLS from './components/Ejercicio 5/Ejercicio5';
// import Ejercicio6 from './components/Ejercicio 6/Ejercicio6';
// import App7 from './components/Ejercicio 7/Ejercicio7';
// import FormExsEight from './components/Ejercicio 8/Ejercicio8';
// import AppointmentForm from './components/Ejercicio 9/AppointmentForm';
// import MovieForm from './components/Ejercicio 10/Ejercicio10';
// import NewsList from './components/Ejercicio 11/NewsList';
// import ClimaApp from './components/Ejercicio 13/Ejercicio13';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';

import Navbar from './common/Navbar';
import Footer from './common/Footer';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client = {queryClient}>
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route exact path='/' element={<App1 name="world"/>}></Route>
    {/* <Route exact path='/Ejercicio2' element={<App2 name="My friend"/>}></Route> */}
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  {/* <App1 name="world" /> */}
  {/* <App2 name="My friend" /> */}
  {/* <NewMessage /> */}
  {/* <TodoList /> */}
  {/* <TodoListWithLS /> */}
  {/* <Ejercicio6 /> */}
  {/* <App7 /> */}
  {/* <FormExsEight /> */}
  {/* <App9 /> */}
  {/* <AppointmentForm /> */}
  {/* <MovieForm /> */}
  {/* <NewsList /> */}
  {/* Ejercicio12 */}
 {/* < ClimaApp /> */}
  {/* Ejercicio14 */}
{/* <Toaster richColors position='top-rigth'/> */}
</QueryClientProvider>
</React.StrictMode>
);