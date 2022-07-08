import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scrollObserver";

const About = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  const { current: elContainer } = refContainer;

  let progress = new Array(elContainer?.children.length).fill(0);

  if (elContainer) {
    Array.from(elContainer.children).forEach((child, index) => {
      let eleTop = child.getBoundingClientRect().top - window.innerHeight / 2;
      let eleBottom =
        child.getBoundingClientRect().bottom - window.innerHeight / 2;
      progress[index] = eleTop < 0 && eleBottom > -20 ? 1 : 0.2;
    });
  }
  console.log(progress);
  return (
    <section
      className="bg-background-color mt-[100vh] text-text-color p-4"
      id="about"
    >
      <div className="max-w-6xl ml-auto mr-auto p-4" ref={refContainer}>
        <div className="transition-all" style={{ opacity: progress[0] }}>
          <h3>Love All Things Web</h3>
          <p className="text-2xl leading-[2em]">
            I'm a UK based web developer with a passion for learning and
            excellence.
            <br />
            I aspire to become a full-stack web developer with an emphasis on
            <br />
            React ecosystem to build beautiful and responsive website.
            <br />
            Plus, I have working knowledge of UI/UX, SEO and performance
            enhancements.
          </p>
        </div>
        <div className="transition-all" style={{ opacity: progress[1] }}>
          <h3>Love Learning</h3>
          <p className="text-2xl leading-[2em]">
            I keep on learning more about the world every day
          </p>
          <p className="text-2xl leading-[2em]">React, Next.js, Tailwindcss</p>
        </div>
        <div className="transition-all" style={{ opacity: progress[2] }}>
          <h3>Love Exciting Technologies</h3>
          <p className="text-2xl leading-[2em]">
            Technologies are not an end in itself, <br />
            but to facilitate efficient development and deployment.
            <br />
            Below is a selection of technologies I have worked with:
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="figma"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.adobe.com/in/products/illustrator.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
                alt="illustrator"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="40"
                height="40"
              />
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.photoshop.com/en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                alt="photoshop"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.php.net" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                alt="php"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="40"
                height="40"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />
            </a>
            <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="sass"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
