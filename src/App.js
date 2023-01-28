import React from 'react';
import { Provider } from 'react-redux';

import { HomeView } from './components';
import './App.css';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <HomeView />
    </Provider>
  );
}

export default App;
