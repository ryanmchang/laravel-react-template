//app.js

require('./bootstrap');
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import history from './history';

import {Switch, Router} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react'
import Master from './components/master'
import configureStore from './store'

const {persistor, store} = configureStore();

//provider is necessary for redux, it enables store access to components
//router used to keep track of redirects and history
//persistgate rehydrates state after reloads

render(

    (<Provider store={store}>
        <PersistGate persistor={persistor}>
            <Master/>
        </PersistGate>
    </Provider>),
    document.getElementById('example')
);