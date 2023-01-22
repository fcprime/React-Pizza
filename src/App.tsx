import React, { Suspense } from 'react';

import Header from './components/Header';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

const Cart = React.lazy(() => import('./pages/Cart'));
const FullPizza = React.lazy(() => import('./pages/FullPizza'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

export const SearchContext = React.createContext('');

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>Идет загрузка корзины</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/pizza/:id"
            element={
              <Suspense fallback={<div>Идет загрузка...</div>}>
                <FullPizza />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идет загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
