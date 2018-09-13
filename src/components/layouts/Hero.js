import React from 'react';
import a from '../layouts/1.jpg';
import './Hero.css'
const Hero = () => {
     return (
        <section class="hero bg is-large">
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
      
            
          
         
       
        
      </section>
      
     )
}

export default Hero;