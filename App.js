import React from 'react';
import { StatusBar } from 'react-native';

import Router from './src/router';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
      <Router />
    </>
  );
}

