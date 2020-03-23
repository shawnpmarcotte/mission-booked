import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";
import github from "./logos/github.jpg";
import LinkedIn from "./logos/LinkedIn-Logo.png";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AboutUs = () => {
  const [shawn, setShawn] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  const [rene, setRene] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  const [jose, setJose] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  const [carolina, setCarolina] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <>
      <div className="container">
        <div className="bio_container">
          <div className="Shawn-pic">
            <h1>Shawn Marcotte</h1>
            <p className="about_bio">
              "Dedicated and driven in the pursuit for excellence. Professional
              history demonstrates effective, innovative and dynamic work
              strategies in order to drive sales, enhance operational
              productivity, and achieve business goals. Extensive experience
              within the marine and yachting industry. High aptitude for
              increasing customer value and improving the customer experience.
              Current Full Stack Web Dev Student."
            </p>
            <a href="https://github.com/shawnpmarcotte">
              <img src={github} alt="GitHub" className="github-logo" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/shawn-paul-marcotte-799b31114/">
              <img src={LinkedIn} alt="LinkedIn" className="linkedin-logo" />
            </a>
            <animated.div
              className="Shawn"
              onMouseMove={({ clientX: x, clientY: y }) =>
                setShawn({ xys: calc(x, y) })
              }
              onMouseLeave={() => setShawn({ xys: [0, 0, 1] })}
              style={{ transform: shawn.xys.interpolate(trans) }}
            />
          </div>
        </div>
        <div className="bio_container">
          <div className="Rene-pic">
            <h1>Rene Breslauer</h1>
            <p className="about_bio">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,ugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum."
            </p>
            <a href="https://github.com/renebreslauer">
              <img src={github} alt="GitHub" className="github-logo" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/renebreslauer/">
              <img src={LinkedIn} alt="LinkedIn" className="linkedin-logo" />
            </a>
            <animated.div
              className="Rene"
              onMouseMove={({ clientX: x, clientY: y }) =>
                setRene({ xys: calc(x, y) })
              }
              onMouseLeave={() => setRene({ xys: [0, 0, 1] })}
              style={{ transform: rene.xys.interpolate(trans) }}
            />
          </div>
        </div>
        <div className="bio_container">
          <div className="Jose-pic">
            <h1>Jose Rangel</h1>
            <p className="about_bio">
              "I started working from a young age and I had developed many
              skills that had help me overcome my problems through out the
              years. I am passionate about my work and I am ambitious. I
              graduated from Wyncode Academy as Full-stack developer."
            </p>
            <a href="https://github.com/josedani08200">
              <img src={github} alt="GitHub" className="github-logo" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/jose-rangel-101b26163/">
              <img src={LinkedIn} alt="LinkedIn" className="linkedin-logo" />
            </a>
            <animated.div
              className="Jose"
              onMouseMove={({ clientX: x, clientY: y }) =>
                setJose({ xys: calc(x, y) })
              }
              onMouseLeave={() => setJose({ xys: [0, 0, 1] })}
              style={{ transform: jose.xys.interpolate(trans) }}
            />
          </div>
        </div>
        <div className="bio_container">
          <div className="Carolina-pic">
            <h1>Carolina Klein</h1>
            <p className="about_bio">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <a href="https://github.com/CarolinaKlein">
              <img src={github} alt="GitHub" className="github-logo" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/carolina-klein-779661a2/">
              <img src={LinkedIn} alt="LinkedIn" className="linkedin-logo" />
            </a>
            <animated.div
              className="Carolina"
              onMouseMove={({ clientX: x, clientY: y }) =>
                setCarolina({ xys: calc(x, y) })
              }
              onMouseLeave={() => setCarolina({ xys: [0, 0, 1] })}
              style={{ transform: carolina.xys.interpolate(trans) }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const AboutUsWrapper = () => (
  <div id="root">
    <AboutUs />
  </div>
);
export default AboutUsWrapper;
