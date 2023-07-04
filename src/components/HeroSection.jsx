import React from 'react'
import paypal from '../assets/paypal.png'
import google from '../assets/google.png'
import dropbox from '../assets/Dropbox_logo_2017.svg'
import image from '../assets/shutterstock_390805177.png'

const HeroSection = () => {
  return (
    <section class="section_two">
      <div class="section_two_text">
        <div class="starts">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>

          <div class="text">Trused by over 4,322 students</div>
        </div>

        <div class="design">
          <h1 class="design_head">Learn Design with Nia Matos</h1>
          <p class="design_para">
            Get your blood test delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </p>
        </div>

        <div class="head_input">
          <input type="text" placeholder="Search course name" />
         <div class="icon">
            <i class="bi bi-search"></i>
         </div>
        </div>

        <div class="sponser">
          <p class="spon_para">Sponserd by :</p>
          <img src={paypal} alt="" class="spon_img" />
          <img src={google} alt="" class="spon_img" />
          <img src={dropbox} alt="" class="spon_img" />
        </div>
      </div>
      <div class="video">

        <div class="box">
            
        </div>
        <div class="mp3">
           <img src={image} alt="" class="mp3" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection