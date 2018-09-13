import React from 'react';

const Hero = () => {
     return (
        <section class="hero is-info is-large">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <span class="navbar-item">
                    <a class="button is-info is-inverted">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
              He Codes
            </p>
            <p class="subtitle">
              Ashutosh
            </p>
          </div>
        </div>
      
        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li class="is-active">
                  <a>About</a>
                </li>
                <li>
                  <a>Languages</a>
                </li>
                <li>
                  <a>Good At</a>
                </li>
                <li>
                  <a>Frameworks</a>
                </li>
                <li>
                  <a>Tools & Libraries</a>
                </li>
                <li>
                  <a>Education</a>
                </li>
               
              </ul>
            </div>
          </nav>
        </div>
      </section>
      
     )
}

export default Hero;