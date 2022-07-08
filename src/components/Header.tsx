import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scrollObserver";

import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { ImLinkedin, ImGithub } from "react-icons/im";

const Header = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
    <div
      ref={refContainer}
      className="fixed top-0 left-0  w-full flex -z-10 flex-col min-h-screen items-center"
      style={{ transform: `translateY(-${progress * 50}vh)` }}
    >
      <div className="flex gap-2 mt-2">
        <a
          href="https://www.linkedin.com/in/edwardchungdesigner/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin className="text-link-color text-3xl hover:text-hover-color" />
        </a>
        <a
          href="https://github.com/edward-designer"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub className="text-link-color text-3xl hover:text-hover-color" />
        </a>
      </div>
      <div className="flex-auto flex flex-col items-center justify-center">
        <div className="text-xl text-text-color">
          hello world, my name is
        </div>
        <h1 className="text-6xl bold text-primary-color drop-shadow-lg font-waterbrush mt-4 lg:text-8xl">
          Edward Chung
        </h1>
        <h2 className="text-2xl bold text-secondary-color">
          always learning, always improving
        </h2>
        <div className="animate-bounce text-4xl mt-4 text-accent-color">
          <a href="#about">
            <IoIosArrowDown />
          </a>
        </div>
      </div>
      <div>
        <HiOutlineMail className="inline text-link-color" />
        <a
          href="mailto:edward.chung.designer@gmail.com"
          className="p-1 text-link-color hover:text-hover-color"
        >
          edward.chung.designer@gmail.com
        </a>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute -z-10 h-full w-full object-cover brightness-75 dark:filter dark:brightness-25"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Header;
