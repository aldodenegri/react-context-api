import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import {BudgetProvider} from './contexts/BudgetContext.jsx'
import HomePage from './pages/HomePage.jsx'
import ChiSiamo from './pages/ChiSiamo.jsx'
import DefaultLayout from './layout/DefaultLayout.jsx'
import Prodotti from './pages/Prodotti.jsx'
import ProdottiDettagli from './pages/ProdottiDettagli.jsx'
function App() {

  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" Component={HomePage}></Route>
              {'<Route path="/" element={<HomePage/>}></Route>'}
              <Route path="/About" Component={ChiSiamo}></Route>
              <Route path="/Products" Component={Prodotti}></Route>
              <Route path="/Products/:id" Component={ProdottiDettagli}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App
