import { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import store from './redux/store';
import App from './app';
import 'react-toastify/dist/ReactToastify.css';


// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
      <ToastContainer />
        <App />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
  </Provider>
);
