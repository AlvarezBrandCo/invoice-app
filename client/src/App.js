import React, { useState } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import "react-widgets/styles.css";

function App() {
  return (
    <Provider store={store}>
        <Router/>
    </Provider>
  );
}

export default App;
