import React, {
  ReactNode,
  useCallback,
  useEffect,
  useState,
  createContext,
} from "react";

interface IScrollValue {
  scrollY: number;
}

export const ScrollContext = createContext<IScrollValue>({
  scrollY: 0,
});

const ScrollObserver = ({ children }: { children: ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
