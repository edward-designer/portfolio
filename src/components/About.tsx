import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scrollObserver";
import Slider from "./Slider";

const About = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refSlider = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  const { current: elContainer } = refContainer;

  let progress = new Array(elContainer?.children.length).fill(0);

  if (elContainer) {
    Array.from(elContainer.children).forEach((child, index) => {
      let eleTop = child.getBoundingClientRect().top - window.innerHeight / 2;
      let eleBottom =
        child.getBoundingClientRect().bottom - window.innerHeight / 2;
      progress[index] = eleTop < 0 && eleBottom > -60 ? 1 : 0.5;
    });
  }
  return (
    <section
      className="bg-background-color mt-[100vh] text-text-color"
      id="about"
    >
      <div className="mt-10" ref={refContainer}>
        <div className="transition-all p-20" style={{ opacity: progress[0] }}>
          <h3>Something about me...</h3>
          <p className="text-2xl leading-[1.2em] mt-8">
            I studied Architecture at uni.
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            Worked as a graphic designer.{" "}
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            Naturally ventured into web design.{" "}
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            Started buidling websites using HTML, CSS, JS and PHP with pet
            projects.{" "}
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            WordPress was a crush then (kind of full-stack dev).{" "}
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            Learnt much about SEO, web performance and analytics.{" "}
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            Discovered React and it's no turning back.{" "}
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            <strong>
              Learning and aspiring to become a full-stack developer.
            </strong>
          </p>
        </div>
        <div
          className="transition-all bg-slate-100 p-20 dark:bg-slate-800"
          style={{ opacity: progress[1] }}
        >
          <h3>On Learning</h3>
          <p className="relative text-2xl leading-[1.2em] mt-8">
            I keep on learning more about the world every day.
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            But the more I know, the more I know I don't know
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            espeically in the field of web development.
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            Which is both exhausting and exciting!
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">
            Current focus: <br />-{" "}
            <strong>React hooks, Redux Toolkits, Next.js, Tailwindcss</strong>
          </p>
        </div>
        <div className="transition-all p-20" style={{ opacity: progress[2] }}>
          <h3>What I Know</h3>
          <p className="text-2xl leading-[1.2em] mt-8">Frontend skills:</p>
          <p className="text-2xl leading-[1.2em] mt-8">
            <strong>
              React, Redux, TypeScript, JavaScript, HTML, CSS (SASS), SEO,
              WordPress
            </strong>
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">Backend skills:</p>
          <p className="text-2xl leading-[1.2em] mt-8">
            <strong>Node.js, noSQL (MongoDB), SQL, PHP</strong>
          </p>
          <p className="text-2xl leading-[1.2em] mt-8">Design skills:</p>
          <p className="text-2xl leading-[1.2em] mt-8">
            <strong>Figma, Photoshop, Illustrator, InDesign </strong>
          </p>
          <Slider inFocus={progress[2] === 1}>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="figma"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="80"
                height="80"
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
                width="80"
                height="80"
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
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="80"
                height="80"
              />
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="80"
                height="80"
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
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.php.net" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                alt="php"
                width="80"
                height="80"
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
                width="80"
                height="80"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="80"
                height="80"
              />
            </a>
            <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="sass"
                width="80"
                height="80"
              />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="figma"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="80"
                height="80"
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
                width="80"
                height="80"
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
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="80"
                height="80"
              />
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="80"
                height="80"
              />
            </a>
          </Slider>
          <p className="text-2xl leading-[2em]">
            To be honest, I know enough to get work done
            <br />
            but still find it wonder to know tonnes of new things everyday.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
