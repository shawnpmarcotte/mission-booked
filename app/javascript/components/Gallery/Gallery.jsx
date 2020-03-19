import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./style.css";
const pages = [
  "https://news.miami.edu/rsmas/_assets/images/images-stories/2018/09/ocean-clean-up-940x529.jpg",
  "https://www.pmo.ir/pso_content/media/image/2020/01/109770_orig.jpg",
  "https://indonesiaexpat.biz/wp-content/uploads/2019/10/aoc.jpg",
  "https://churchhealth.org/wp-content/uploads/2016/09/Perea-Volunteer-for-Kids.png",
  "https://sanfranciscoparksalliance.org/wp-content/uploads/2019/10/gardening-2518377_1920.jpg",
  "https://s26643.pcdn.co/wp-content/uploads/2018/07/FTLAUDERDALE07-23-18-3.jpg",
  "https://images2.minutemediacdn.com/image/upload/c_crop,h_1190,w_2121,x_0,y_33/f_auto,q_auto,w_1100/v1583164013/shape/mentalfloss/546495-gettyimages-1094085668.jpg"
];
const Gallery = () => {
  const index = useRef(0);
  const [props, set] = useSprings(pages.length, i => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block"
  }));
  const bind = useDrag(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            pages.length - 1
          ))
        );
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );
  return props.map(({ x, display, sc }, i) => (
    <animated.div
      {...bind()}
      key={i}
      style={{
        display,
        transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
      }}
    >
      <animated.div
        style={{
          transform: sc.interpolate(s => `scale(${s})`),
          backgroundImage: `url(${pages[i]})`
        }}
      />
    </animated.div>
  ));
};
const GalleryWrapper = () => (
  <div id="root">
    <Gallery />
  </div>
);

export default GalleryWrapper;
