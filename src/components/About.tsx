import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../utils/scrollObserver";
import Slider from "./Slider";
import Imac from "./Imac";

const About = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  const [screenNumber, setScreenNumber] = useState<null | number>(null);
  
  const { current: elContainer } = refContainer;

  const progress = useRef<number[]>(
    new Array(elContainer?.children.length).fill(0.5)
  );
  useEffect(() => {
    if (elContainer) {
      Array.from(elContainer.children).forEach((child, index) => {
        let eleTop = child.getBoundingClientRect().top - window.innerHeight / 2;
        let eleBottom =
          child.getBoundingClientRect().bottom - window.innerHeight / 2;
        progress.current[index] = eleTop < 0 && eleBottom > -60 ? 1 : 0.5;
      });
    }
  }, [scrollY]);
  return (
    <section
      className="bg-background-color mt-[100vh] text-text-color"
      id="about"
    >
      <div className="mt-10" ref={refContainer}>
        <div
          className="transition-all p-5 xl:p-20 flex flex-col justify-around xl:flex-row"
          style={{ opacity: progress.current[0] }}
        >
          <div>
            <h3>Something about me...</h3>
            <p className="text-2xl leading-[1.2em] mt-8">
              I studied Architecture at uni.
            </p>
            <p className="text-2xl leading-[1.2em] mt-8">
              Worked as a{" "}
              <button
                className="underline hover:text-hover-color hover:no-underline focus:text-hover-color focus:animate-pulse focus:no-underline"
                onClick={() => setScreenNumber(4)}
              >
                graphic designer
              </button>
              .
            </p>
            <p className="text-2xl leading-[1.2em] mt-8">
              Naturally ventured into{" "}
              <button
                className="underline hover:text-hover-color hover:no-underline focus:text-hover-color focus:animate-pulse focus:no-underline"
                onClick={() => setScreenNumber(5)}
              >
                web design
              </button>
              .
            </p>
            <p className="text-2xl leading-[1.2em] mt-8">
              Started building websites using HTML, CSS, JS and PHP.
            </p>
            <p className="text-2xl leading-[1.2em] mt-8">
              WordPress was a crush then (kind of{" "}
              <button
                className="underline hover:text-hover-color hover:no-underline focus:text-hover-color focus:animate-pulse focus:no-underline"
                onClick={() => setScreenNumber(3)}
              >
                full-stack dev
              </button>
              ).
            </p>
            <p className="text-2xl leading-[1.2em] mt-8">
              Learnt much about SEO, web performance and analytics.
            </p>
            <p className="text-2xl leading-[1.2em] mt-8">
              Discovered{" "}
              <button
                className="underline hover:text-hover-color hover:no-underline focus:text-hover-color focus:animate-pulse focus:no-underline"
                onClick={() => setScreenNumber(0)}
              >
                React
              </button>{" "}
              and it's no turning back.
            </p>
            <p className="text-2xl leading-[1.2em] mt-8">
              <strong>
                Learning and aspiring to become a{" "}
                <button
                  className="underline hover:text-hover-color hover:no-underline focus:text-hover-color focus:animate-pulse focus:no-underline"
                  onClick={() => setScreenNumber(2)}
                >
                  full-stack developer
                </button>
                .
              </strong>
            </p>
          </div>
          <Imac screenShow={screenNumber} />
        </div>
        <div
          className="transition-all bg-slate-100 p-5 xl:p-20 dark:bg-slate-800"
          style={{ opacity: progress.current[1] }}
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
            Current focus: <br />-
            <strong>React hooks, Redux Toolkits, Next.js, Tailwindcss</strong>
          </p>
        </div>
        <div
          className="transition-all p-5 xl:p-20 "
          style={{ opacity: progress.current[2] }}
        >
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
          <Slider inFocus={progress.current[2] === 1}>
            <a href="https://www.blender.org/" target="_blank" rel="noreferrer">
              <img
                src="https://download.blender.org/branding/community/blender_community_badge_white.svg"
                alt="blender"
                width="80"
                height="80"
              />
            </a>
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
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
            <a href="https://www.cypress.io" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg"
                alt="cypress"
                width="80"
                height="80"
              />
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
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
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="firebase"
                width="80"
                height="80"
              />
            </a>
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg"
                alt="gatsby"
                width="80"
                height="80"
              />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="80"
                height="80"
              />
            </a>
            <a href="https://heroku.com" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
                alt="heroku"
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
            <a href="https://jestjs.io" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                alt="jest"
                width="80"
                height="80"
              />
            </a>
            <a href="https://mariadb.org/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg"
                alt="mariadb"
                width="80"
                height="80"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
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
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
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
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
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
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
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
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="80"
                height="80"
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
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
