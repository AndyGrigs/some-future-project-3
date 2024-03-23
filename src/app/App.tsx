import React, { Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from './providers/ThemeProvider/ui/theme/useTheme'
import { classNames } from 'shared/helpers/classNames'
import { AppRouter } from './providers/router'



const App = () => {

  const { theme, toogleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>toogle</button>
      <Link to='/about'>About</Link><br />
      <Link to='/'>Home</Link>
      <AppRouter />
    </div>
  )
}

export default App
