import React from 'react'
import './App.css';
import Layout from './components/Layout/Layout';
import Burger from './container/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
    <Layout>
      <Burger/>
    </Layout>
    </div>
  );
}

export default App;
