import { createContext, useContext, useState } from "react";

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const defaultPreferences = {
    fontSize: "16px",
    accentColor: "#4caf50",
    layout: "spacious",
  };

  const [preferences, setPreferences] = useState(defaultPreferences);

  const updatePreference = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  return (
    <PreferencesContext.Provider
      value={{ preferences, updatePreference, resetPreferences }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => useContext(PreferencesContext);
