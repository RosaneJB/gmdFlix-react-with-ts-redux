import React from 'react';
import { Layout } from './pages/layout';
import { MainRoutes } from './routes';

function App() {
  return (
    <>
    <Layout>
        <MainRoutes />  
    </Layout>
    </>
  );
}

export default App;
