import React from 'react'
import arrow from '../assets/arrow.svg'
import path from "../assets/Path 68.png"

const Funct = () => {
  return (
    <section class="function">
      <div class="tutorial_text pop">
        <h6>WHATS THE FUNCTION</h6>
        <h1>Let's see how it works</h1>
    </div>

    <div class="function_box">
      <div class="function_box_1">
        <button>01</button>
        <h4>Set disbursement
          Instructions</h4>
          <p>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
      
       
      </div>
      
        <img src={arrow} alt=""/>
     

        <div class="function_box_1">
          <button>02</button>
          <h4>Assembly retrieves funds from account</h4>
            <p>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
          
         
        </div>
        
          <img src={path} alt=""/>

          <div class="function_box_1">
            <button>03</button>
            <h4>Assembly initiates disbursement</h4>
              <p>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
          
           
          </div>
          
            <img src={arrow} alt=""/>

            <div class="function_box_1">
              <button>04</button>
              <h4>Customer receives funds payment</h4>
                <p>Get your blood tests delivered athome collect a sample from theyour blood tests.</p>
          
             
            </div>
            
              

    </div>

    </section>
  )
}

export default Funct