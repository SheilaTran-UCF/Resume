import React from 'react';
import AppResume from './container/Resume';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';


const { store } = configureStore();

function App() {
  return (
    <>
    <Provider store={store}>
      <AppResume/>
    </Provider>
    </>
  );
}

export default App;
