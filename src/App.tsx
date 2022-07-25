import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/general/home';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
}
