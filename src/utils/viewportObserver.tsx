import React, {
  ReactNode,
  useCallback,
  useEffect,
  useState,
  createContext,
} from "react";

interface IScrollValue {
  innerWidth: number;
}

export const ViewPortContext = createContext<IScrollValue>({
  innerWidth: 0,
});

const ViewPortObserver = ({ children }: { children: ReactNode }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <ViewPortContext.Provider value={{ innerWidth }}>
      {children}
    </ViewPortContext.Provider>
  );
};

export default ViewPortObserver;
