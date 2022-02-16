import React from 'react';
import Home from './Home';
import Transactions from './Transactions'

function index(props) {
    return (
        <div className='App'>
            <Home />
            <Transactions />
        </div>
    );
}

export default index;