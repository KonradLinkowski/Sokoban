import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './views/App'
import { Game } from './views/Game'
import { Routes, Route, HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="play/:lvl" element={<Game />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
