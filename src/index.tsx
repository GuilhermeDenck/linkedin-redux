import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';

import { Provider } from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
