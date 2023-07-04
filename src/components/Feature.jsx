import React from 'react'
import eye from '../assets/Ellipse.svg'
import play from '../assets/play-button.svg'
import eye2 from '../assets/eye.svg'
import Slider from 'react-slick'

const Feature = () => {
 
 
    const settings = {
        dots: true,
        infinite: true,
        autoPlay : true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
 
    return (
   <>
       <section class="tutorial">
        <div class="tutorial_text">
            <h6>QUALITY FEATURES</h6>
            <h1>Tutorials that people love most</h1>
        </div>

        <div class="tutorial_images">
           
      
            <div>
            <div class="tutorial_image">
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
            <div>
                        
            <div class="tutorial_image">
                <div class="img1 figma">
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
                    <i class="fa-regular fa-star"></i>
                    <p> 5.0 (392 reviews)</p>
                </div>
                 <div class="star_text">
                <h4>
                    Create multiple artboard by using figma prototyping tools development
                </h4>
              
               </div>
               <div class="eye">
                <img src={eye2}alt=""/>
                <p>3,532 students watched</p>
            </div>
            </div>
           
            </div>

<div>
<div class="tutorial_image">
                <div class="img1 web">
                    <button class="tutorial_btn">
                        <img src={eye} alt=""/>
                        <img class="play_btn" src={play} alt=""/>
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
                        Convert your web layout theming easily with sketch zeplin extension
                    </h4>
                  
                   </div>
                   <div class="eye">
                    <img src={eye2} alt=""/>
                    <p>1,037 students watched</p>
                </div>
                
            </div>
</div>

   
            
            
        </div>
      
    </section>

    <section class="features">
        <div class="feature_images">
            <div class="feature_img1">
              <div class="feature_img">
                <h1>80K+</h1>
                <p>We have more than students</p>
              </div>

              <div class="feature_imgplus">
                <h1>150+</h1>
                <p>Free online tutorials
                    videos avaialble</p>

              </div>
            </div>

            <div class="feature_img1">
                <div class="feature_img million">
                  <h1  class="feature_head">90+</h1>
                  <p>Daily updated blog
                    post maintain</p>
                </div>
  
                <div class="feature_imgplus million_one">
                  <h1 class="feature_head_1">& 3M</h1>
                  <p>Job posted everydays with  qualification</p>
  
                </div>
              </div>
        </div>

        <div class="feature_text">
            <h6>Core features</h6>
            <h2>Smart Jackpots that you may love this anytime & anywhere</h2>

            <p>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
            <button class="feature_btn">Explore details</button>
        </div>
       
    </section>
   </>
  )
}

export default Feature