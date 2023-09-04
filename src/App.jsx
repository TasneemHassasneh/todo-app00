import React from 'react';

import Todo from './Components/Todo';

import { SettingsProvider } from './SettingsContext';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
      <div className="App">
        <Todo />
      </div>
    </SettingsProvider>
     
    );
  }
}
