import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { APPwithRouter } from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <APPwithRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
