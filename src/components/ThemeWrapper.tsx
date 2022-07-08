import React, { ReactNode, useState } from "react";
import { Theme } from "../@types/portfolio";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div data-theme={theme} className="h-screen">
      <div className="fixed top-0 right-0 flex items-center justify-end p-2 gap-1 text-lg">
        <span>☀️</span>
        <label className="inline-block h-5 relative w-10" htmlFor="checkbox">
          <input
            className="peer hidden"
            type="checkbox"
            id="checkbox"
            onChange={changeTheme}
          />
          <div
            className="absolute rounded-full bg-slate-300 top-0 right-0 bottom-0 left-0 cursor-pointer transition-all duration:500
          before:absolute before:content-[''] before:h-4 before:w-4 before:bg-white before:rounded-full before:bottom-[2px] before:left-1 before:transition-all before:duration-500 
          peer-checked:bg-slate-900 peer-checked:before:translate-x-4"
          ></div>
        </label>
        <span>🌙</span>
      </div>
      {children}
    </div>
  );
};

export default ThemeWrapper;
