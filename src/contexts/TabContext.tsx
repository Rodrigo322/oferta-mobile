import { createContext, useContext, useState } from "react";

interface ITabContext {
  showTab: boolean;
  setShowTab: (showTab: boolean) => void;
  idBank: number;
  setIdBank: (idBank: number) => void;
}

const defaultTabContext: ITabContext = {
  showTab: false,
  idBank: 0,
  setIdBank: () => {},
  setShowTab: () => {},
};

export const TabContext = createContext(defaultTabContext);

export const useTabContext = () => useContext(TabContext);

interface TabProviderProps {
  children: React.ReactNode;
}

export const TabProvider = ({ children }: TabProviderProps) => {
  const [showTab, setShowTab] = useState(false);
  const [idBank, setIdBank] = useState(0);

  const tabContextValue = {
    showTab,
    setShowTab,
    setIdBank,
    idBank,
  };

  return (
    <TabContext.Provider value={tabContextValue}>
      {children}
    </TabContext.Provider>
  );
};
