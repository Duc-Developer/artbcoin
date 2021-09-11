import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingContainer from 'components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <LoadingContainer>
            <ToastContainer autoClose={4000} hideProgressBar={false} closeOnClick pauseOnFocusLoss />
            <App />
        </LoadingContainer>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
