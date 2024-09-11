'use client';
import { createContext, useState, ReactNode } from 'react';

export const ResultsContext = createContext<any>(null);

export default function useResultsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [result, setResult] = useState<any>(null);

  const contextValue = {
    result,
    setResult,
  };

  return (
    <ResultsContext.Provider value={contextValue}>
      {children}
    </ResultsContext.Provider>
  );
}
