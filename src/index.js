import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App';
import itemsSlice from './features/itemsSlice';
import selectedSlice from './features/selectedSlice';
import settingsSlice from './features/settingsSlice';
import loadingSlice from './features/loadingSlice';
import statusSlice from './features/statusSlice';

export const store = configureStore({
  reducer: {
    items: itemsSlice,
    selected: selectedSlice,
    settings: settingsSlice,
    loading: loadingSlice,
    status: statusSlice,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
