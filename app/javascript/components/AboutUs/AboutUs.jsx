import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import "./styles.css";
import Shawn from "./Images/Shawn.jpg";
import Jose from "./Images/Jose.jpg";
import Rene from "./Images/Rene.jpg";
import Carolina from "./Images/Carolina.jpg";

const Members = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>
      <img src={Shawn} alt="Shawn" />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>
      <img src={Rene} alt="Rene" />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>
      <img src={Jose} alt="Jose" />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>
      <img src={Carolina} alt="Carolina" />
    </animated.div>
  )
];

const AboutUs = () => {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex(state => (state + 1) % 4), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translated3d(0%,0,0" },
    leave: { opacity: 0, transform: "translated3d(-50%,0,0)" }
  });
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Member = Members[item];
        return <Member key={key} style={props} />;
      })}
    </div>
  );
};

export default AboutUs;
