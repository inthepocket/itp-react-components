import React from 'react';
import 'normalize.css/normalize.css';
import './root.css';
import Header from '<PROJECT-NAME>-common/components/molecules/Header';
import Button from '<PROJECT-NAME>-common/components/atoms/Button';
import styles from './App.module.css';

const App = () => (
  <div>
    <Header title="Create ITP React App" />
    <div className={styles.content}>
      <Button prefixCls="ant-btn" color="primary" type="primary" size="large">Large Button</Button>
    </div>
  </div>
);

export default App;

