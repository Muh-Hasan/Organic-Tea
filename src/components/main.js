import React, { useRef, useEffect} from "react";
import "./main.css";
import { gsap } from "gsap";
// importing images
import cart from "../assets/cart.png";
import search from "../assets/search.png";
import leaf from "../assets/leaf.png";
import greentea from "../assets/greentea.png";

export default function Main() {

  // ref's
  var layer_1 = useRef(null)
  var layer_2 = useRef(null)
  var layer_3 = useRef(null)
  var layer_4 = useRef(null)
  var layer_5 = useRef(null)
  var layer_6 = useRef(null)
  var navbar = useRef(null)
  var more = useRef(null)
  var leafo = useRef(null)
  var organic = useRef(null)
  var cup = useRef(null)
  var over = useRef(null)

  // animations
  useEffect(() => {
    // overlay layers transition
    gsap.to(layer_1.current, { y: '-100vh', delay: .5, ease: 'Power2.easeInOut', duration: 1 });
    gsap.to(layer_2.current, { y: '-100vh', delay: .7, ease: 'Power3.easeInOut', duration: 1 });
    gsap.to(layer_3.current, { y: '-100vh', delay: .9, ease: 'Power4.easeInOut', duration: 1 });
    gsap.to(layer_4.current, { y: '-100vh', delay: 1.1, ease: 'Power2.easeInOut', duration: 1 });
    gsap.to(layer_5.current, { y: '-100vh', delay: 1.3, ease: 'Power3.easeInOut', duration: 1 });
    gsap.to(layer_6.current, { y: '-100vh', delay: 1.5, ease: 'Power4.easeInOut', duration: 1 });
    // overlay vinished
    gsap.to(over.current, { y: '-100vh', delay: 1.8, ease: 'Power4.easeInOut' });
    gsap.from(navbar.current, { y: '-50vh', delay: 2, ease: 'slow', opacity: '0', duration: 1 });
    gsap.from(more.current, { x: '-50vh', delay: 2.4, ease: 'slow', opacity: '0' });
    gsap.from(leafo.current, { y: '-100vh', delay: 2.8, ease: 'Power1.easeOut', opacity: '0', duration: 1 });
    gsap.from(organic.current, { delay: 3.2, transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 0 });
    gsap.from(cup.current, { y: '100vh', delay: 4, ease: 'slow', opacity: '0', duration: 1 });
  })
  return (
    <>
      <div className="main">
        <div>
          <div className="navbar" ref={navbar}>
            <div className="nav-logo">
              <span>ORGANIC TEA</span>
            </div>
            <div className="nav-obj">
              <span>Home</span>
              <span>Product</span>
              <span>Contact</span>
            </div>
            <div className="nav-icon">
              <img src={search} alt="search" />
              <img src={cart} alt="cart" />
            </div>
          </div>
          <div>
            <br />
            <br />
            <br />

            <div className='more-tea' ref={more}>
              <h4>Be more with tea</h4>
            </div>
          </div>
          <div>
            <div className='main-head container-fluid'>
              <div className="main-head-div row row-xl" ref={organic}>
                <h1>ORGANIC</h1>
              </div>
              <div className='main-head-img1 img-fluid' ref={leafo} >
                <img className={'img-fluid'} src={leaf} alt="leaf" />
              </div>
              <div className='main-head-img2 img-fluid' ref={cup}>
                <img className={'img-fluid'} src={greentea} alt='greentea' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='overlay' ref={over}>
        <div ref={layer_1} className='layer1'></div>
        <div ref={layer_2} className='layer2'></div>
        <div ref={layer_3} className='layer3'></div>
        <div ref={layer_4} className='layer4'></div>
        <div ref={layer_5} className='layer5'></div>
        <div ref={layer_6} className='layer6'></div>
      </div>

    </>
  );
}
