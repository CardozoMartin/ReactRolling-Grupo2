import React from 'react'
import ReactDOM from 'react-dom/client'

import UserForms from './components/UserForms'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserForms></UserForms>
  </React.StrictMode>,
)
