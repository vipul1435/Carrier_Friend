import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "store"
import {api} from 'store/api'
import { Provider } from 'react-redux';


const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>    
  // </React.StrictMode>
);
