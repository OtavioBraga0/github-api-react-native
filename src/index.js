import React from 'react';
import 'react-native-gesture-handler';

import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import Routes from './Routes';

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <Routes />
        </>
    );
};

export default App;
