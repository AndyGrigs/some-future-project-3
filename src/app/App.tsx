import React, { Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from './providers/ThemeProvider/ui/theme/useTheme'
import { classNames } from 'shared/helpers/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'




const App = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
