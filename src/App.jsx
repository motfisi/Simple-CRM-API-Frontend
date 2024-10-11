import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTER_ROUTES } from '@constants';
import Initial from '@components/initial/Initial';
import Clients from '@components/clients/Clients';
import Footer from '@components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER_ROUTES.ROOT}>
          <Route index element={<Initial />} />
          <Route path={ROUTER_ROUTES.FOOTER} element={<Footer />}>
            <Route path={ROUTER_ROUTES.CLIENTS} element={<Clients />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
