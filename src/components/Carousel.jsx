import React from 'react'
import eye from '../assets/Ellipse.svg'
import play from '../assets/play-button.svg'
import eye2 from '../assets/eye.svg'


const Carousel = () => {
  return (
   <section class="carousel">
     
      
        <div class="tutorial_images car">
            <div class="tutorial_image caro_img">
                <div class="img1 work">
                    <button class="tutorial_btn ">
                        <img src={eye} alt=""/>
                        <img  class="play_btn" src={play} alt=""/>
                    </button>

                </div>

                <div class="tutorial_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <p> 5.0 (392 reviews)</p>
                </div>
                <div class="star_text">
            <h4>
                How to work with prototype design with adobe xd featuring tools
            </h4>
           
           </div>
           <div class="eye">
            <img src={eye2} alt=""/>
            <p>2,538 students watched</p>
        </div>
            </div>
           
           
            
            
        </div>

        <div class="carousel_text">
          <div class="caro_text">
            <h6>FREE TUTORIAL</h6>
            <h1>More than  thousand
              of free tutorial upload
              every weeks</h1>
              <p>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
              <button>Explore details</button>
        </div>

        </div>
    </section>
  )
}

export default Carousel