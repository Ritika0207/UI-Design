import React from 'react'
import check from '../assets/check.png'
import close from '../assets/close (1).svg'

const Plans = () => {
  return (
    <section class="plans">
      <div class="tutorial_text pop">
        <h6>PRICING PLAN</h6>
        <h1>Choose your pricing policy</h1>
    </div>

    <div class="plans_buttons">
      <button class="plan_btn new">
        Monthly Plan
      </button>
      <button class="plan_btn ">
        Annual Plan
      </button>
    </div>

    <div class="pricing">
      <div class="free_plan">
       <div class="free_plan_head">
        <h3>Free Plan</h3>
        <p>For Small teams or office</p>
       </div>

      <div class="plan_text">
        <div class="free_plan_text">
          <img src={check} alt=""/>
          <p>Ultimate access to all course, exercises and assessments</p>
         </div>
         <div class="free_plan_text">
          <img src={check} alt=""/>
          <p>Free acess for all kind of exercise corrections with downloads.</p>
         </div>
         <div class="free_plan_text">
          <img src={check} alt=""/>
          <p>Total assessment corrections with free download access system</p>
         </div>
        
         <div class="free_plan_text">
          <img src={close} alt=""/>
          <p class="plan_para">Unlimited download of courses on the mobile app contents</p>
         </div>
         <div class="free_plan_text">
          <img src={close} alt=""/>
          <p class="plan_para">Download and print courses and exercises in PDF</p>
         </div>
       <div class="sub_btn">
        <button>Free Trial</button>
       </div>
      </div>
      </div>

    
      <div class="free_plan pre">
        <div class="premium_btn">
          <button>Recommended</button>
        </div>
        <div class="free_plan_head premi">
         <h3>Premium</h3>
         <p>For Small teams or office</p>
         <div class="premi_text">
          
         <p>Starting from</p> 
         <h2 class="month">49.99/ month</h2> 
         </div>
        </div>
 
       <div class="plan_text">
         <div class="free_plan_text">
           <img src={check} alt=""/>
           <p>Ultimate access to all course, exercises and assessments</p>
          </div>
          <div class="free_plan_text">
           <img src={check} alt=""/>
           <p>Free acess for all kind of exercise corrections with downloads.</p>
          </div>
          <div class="free_plan_text">
           <img src={check} alt=""/>
           <p>Total assessment corrections with free download access system</p>
          </div>
         
          <div class="free_plan_text">
           <img src={check} alt=""/>
           <p class="plan_para">Unlimited download of courses on the mobile app contents</p>
          </div>
          <div class="free_plan_text">
           <img src={check} alt=""/>
           <p class="plan_para">Download and print courses and exercises in PDF</p>
          </div>
        <div class="sub_btn">
         <button>Subscribe Now</button>
        </div>
       </div>
       </div>

    </div>

    </section>
  )
}

export default Plans