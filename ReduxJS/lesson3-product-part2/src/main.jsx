import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import configureStore from './tools/store/configureStore'
import { createProductAction } from './tools/actions/productAction';
import { product } from './data/static';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss';
import Router from './Router';
import { Provider } from 'react-redux';
const store = configureStore();

product.map(item => (
  store.dispatch(createProductAction(item))
))



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
