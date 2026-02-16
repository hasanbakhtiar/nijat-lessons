import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import configureStore from './tools/store/configureStore'
import { createProductAction } from './tools/actions/productAction';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(createProductAction({ title: "Asus", price: 5000 }));
store.dispatch(createProductAction({ title: "Acer", price: 1000 }));



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello React</h1>
  </StrictMode>,
)
