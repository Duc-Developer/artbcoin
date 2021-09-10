import React, { FC } from 'react';
import './App.scss';
import logo from './logo.svg';
import { toast } from 'react-toastify';

import Navbar from 'layouts/Navbar';
import DashBoard from 'pages/Dashboard';
import Footer from 'layouts/Footer';

const App: FC = () => {
    return (
        <div className="App">
            <Navbar />
            <DashBoard />
            <Footer />
        </div>
    );
};

export default App;
