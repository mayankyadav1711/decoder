import React from 'react';
import "./hero.css"
function Hero() {
  return (
    <>
   

    <main class="main mt-[-4rem] mb-20">
       <section class="section banner banner-section ">
          <div class="container banner-column">
             <img class="banner-image" src="https://i.ibb.co/0m4dv6N/view-brain-with-circuit-board.png" alt="banner"/>
             <div class="banner-inner">
                <h1 class="heading-xl">Understand Your Code Instantly</h1>
                <p class="paragraph">
                Discover the power of instant code explanations. Search any GitHub repository and get clear,
                concise explanations of the code. Enhance your coding knowledge and productivity effortlessly.
                </p>
                <button class="btn btn-darken btn-inline">
                   Explore Now<i class="bx bx-right-arrow-alt"></i>
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