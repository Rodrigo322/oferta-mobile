import { createContext, useContext, useState } from "react";

interface ITabContext {
  showTab: boolean;
  setShowTab: (showTab: boolean) => void;
}

const defaultTabContext: ITabContext = {
  showTab: false,
  setShowTab: () => {},
};

export const TabContext = createContext(defaultTabContext);

export const useTabContext = () => useContext(TabContext);

interface TabProviderProps {
  children: React.ReactNode;
}

export const TabProvider = ({ children }: TabProviderProps) => {
  const [showTab, setShowTab] = useState(false);

  const tabContextValue = {
    showTab,
    setShowTab,
  };

  return (
    <TabContext.Provider value={tabContextValue}>
      {children}
    </TabContext.Provider>
  );
};
