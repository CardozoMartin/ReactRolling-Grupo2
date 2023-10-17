import React from 'react'
import ReactDOM from 'react-dom/client'



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'
import { NavBar } from './commos/NavBar.jsx'
import { Footer } from './commos/Footer.jsx'
import { HolaMundo } from './views/HolaMundo.jsx'
import HelloWordProps from './views/HelloWordProps.jsx'
import { MessegeProps } from './views/MessegeProps.jsx'
import AddTask from './views/AddTask.jsx'
import { ListLocalStorage } from './views/ListLocalStorage.jsx'
import { Cards } from './views/Cards.jsx'

import { FormUser } from './views/FormUser.jsx'
import PetClinic from './views/PetClinic.jsx'
import ForMovies from './views/ForMovies.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
    
        <Route exact path='/ejercicio1' element={<HolaMundo/>}></Route>
        <Route exact path='/ejercicio2' element={<HelloWordProps/>}></Route>
        <Route exact path='/ejercicio3' element={<MessegeProps/>}></Route>
        <Route exact path='/ejercicio4' element={<AddTask/>}></Route>
        <Route exact path='/ejercicio5' element={<ListLocalStorage/>}></Route>
       
        <Route exact path='/ejercicio7' element={<Cards/>}></Route>
        <Route exact path='/ejercicio8' element={<FormUser/>}></Route>
        <Route exact path='/ejercicio9' element={<PetClinic/>}></Route>
        <Route exact path='/ejercicio10' element={<ForMovies/>}></Route>


        






      </Routes>
      <Footer></Footer>
    
      </BrowserRouter>

    </QueryClientProvider>
  </React.StrictMode>,
)
