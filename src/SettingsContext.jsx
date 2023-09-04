import  { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
  return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
  const defaultSettings = {
    maxItemsPerPage: 3, 
    hideCompleted: true, 
    defaultSort: 'difficulty', 
  };

  const [settings] = useState(defaultSettings);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
