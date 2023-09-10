import React from 'react';
import Home from './Components/Home/Home';
import SettingsPage from './SettingsPage';
import {Routes,  Route} from 'react-router-dom';
export default class App extends React.Component {
  render() {
    return (
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
    );
  }
}
