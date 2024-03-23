import React, { Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useTheme } from './providers/ThemeProvider/ui/theme/useTheme'
import { classNames } from '../shared/helpers/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'


const App = () => {

  const { theme, toogleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>toogle</button>
      <Link to='/about'>About</Link><br />
      <Link to='/'>Home</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
