import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Blog from '../pages/Blog'
import Dashboard from '../pages/Dashboard'
import FAQ from '../pages/FAQ'
import Policy from '../pages/Policy'
import Support from '../pages/Support'
import Team from '../pages/Team'
import Wallet from '../pages/Wallet'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' element={<Dashboard/>}/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/wallet' element={<Wallet />}/>
        <Route path='/faq' element={<FAQ />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/support' element={<Support />}/>
        <Route path='/policy' element={<Policy />}/>
      </Routes>
    </>
  )
}

export default Router