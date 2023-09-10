// SettingsContext.js
import  { createContext, useState, useContext } from 'react';


const SettingsContext = createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
  const defaultSettings = {
    displayItems: 3,
    hideCompleted: true,
    difficulty: 'default',
  };

  const [settings, setSettings] = useState(defaultSettings);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
