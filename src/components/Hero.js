import React from 'react';
import "./hero.css"
function Hero() {
  return (
    <>
   

    <main class="main">
       <section class="section banner banner-section">
          <div class="container banner-column">
             <img class="banner-image" src="https://i.ibb.co/vB5LTFG/Headphone.png" alt="banner"/>
             <div class="banner-inner">
                <h1 class="heading-xl">Experience Media Like Never Before</h1>
                <p class="paragraph">
                   Enjoy award-winning stereo beats with wireless listening freedom and sleek,
                   streamlined with premium padded and delivering first-rate playback.
                </p>
                <button class="btn btn-darken btn-inline">
                   Our Products<i class="bx bx-right-arrow-alt"></i>
                </button>
             </div>
             <div class="banner-links">
                <a href="#" title=""><i class="bx bxl-facebook"></i></a>
                <a href="#" title=""><i class="bx bxl-instagram"></i></a>
                <a href="#" title=""><i class="bx bxl-twitter"></i></a>
                <a href="#" title=""><i class="bx bxl-youtube"></i></a>
             </div>
          </div>
       </section>
    </main>
    </>
  );
}

export default Hero;