import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import store from './tools/store';
import { Provider } from 'react-redux';
import {  addProduct } from './tools/features/productSlice';

console.log(store.getState());
const staticData = [
  {
    id: 1,
    title: "asus",
    price: 4000
  },
  {
    id: 1,
    title: "asus",
    price: 4000
  }
]


staticData.map(item => (
  store.dispatch(addProduct(item))
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
