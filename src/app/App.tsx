import React, { useEffect } from 'react';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/ui/theme/useTheme';
import { classNames } from 'shared/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
