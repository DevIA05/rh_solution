import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Table from './components/Table';

const App: Component = () => {
  return (
    <div>
      <Table />
    </div>
  );
};

export default App;
