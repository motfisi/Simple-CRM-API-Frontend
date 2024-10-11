import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTER_ROUTES } from '@constants';
import Initial from '@components/initial/Initial';
import Clients from '@components/clients/Clients';
import ClientInfo from '@components/clients/ClientInfo';
import Tasks from '@components/tasks/Tasks';
import TaskInfo from '@components/tasks/TaskInfo';
import NotFound from '@components/notFound/NotFound';
import Footer from '@components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTER_ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTER_ROUTES.ROOT}>
          <Route index element={<Initial />} />
          <Route path={ROUTER_ROUTES.FOOTER} element={<Footer />}>
            <Route path={ROUTER_ROUTES.CLIENTS}>
              <Route index element={<Clients />} />
              <Route
                path={ROUTER_ROUTES.CLIENT_INFO}
                element={<ClientInfo />}
              />
            </Route>
            <Route path={ROUTER_ROUTES.TASKS}>
              <Route index element={<Tasks />} />
              <Route path={ROUTER_ROUTES.TASK_INFO} element={<TaskInfo />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
