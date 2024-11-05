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
      {/* <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div> */}
  
    <div className="creative-studio">
      <div className="content">
        <h1>Creative Studio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="tour-btn">Take a Tour</button>
      </div>
      <div className="video-section">
        <h2>Meet our Team</h2>
        <div className="video-placeholder">
          <img src="team-placeholder.jpg" alt="Team Video" />
        </div>
      </div>
      <footer>
        <div className="data-analytics">
          <div>Data</div>
          <div>Analytics</div>
          <div>More Info</div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default App;
