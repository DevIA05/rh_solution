import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Table from './components/Table';
import Modal from './components/Modal';

const App: Component = () => {
  return (
    <div>
      {/* <Modal /> */}
      <Table />
    </div>
  );
};

export default App;
