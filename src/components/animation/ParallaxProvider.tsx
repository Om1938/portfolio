"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { ParallaxProvider as ReactParallaxProvider } from "react-scroll-parallax";

type ParallaxContextType = {
  isEnabled: boolean;
};

const ParallaxContext = createContext<ParallaxContextType>({
  isEnabled: true,
});

export const useParallax = () => useContext(ParallaxContext);

interface ParallaxProviderProps {
  children: ReactNode;
}

export function ParallaxProvider({ children }: ParallaxProviderProps) {
  return (
    <ParallaxContext.Provider value={{ isEnabled: true }}>
      <ReactParallaxProvider>{children}</ReactParallaxProvider>
    </ParallaxContext.Provider>
  );
}
