import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { setLoadingSetter } from "./loadingHandler";

type LoadingContextType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoadingSetter(setLoading);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading debe usarse dentro de <LoadingProvider>");
  }
  return context;
};
