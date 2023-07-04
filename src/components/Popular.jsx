import React from 'react'
import play from '../assets/play-button.svg'
import eye2 from '../assets/eye.svg'
import check from '../assets/check-mark.svg'

const Popular = () => {
  return (
    <section class="popular">
       
            <div class="tutorial_text pop">
                <h6>QUALITY FEATURES</h6>
                <h1>Popular Designing Course</h1>
            </div>

            <div class="popular_items">
                <div class="popular_image">
                   <button class="popular_btn">
                    <img src={play} alt=""/>
                   </button>
                </div>

                <div class="popular_text">
                    <div class="popular_star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p> 5.0 (392 reviews)</p>
                        <div class="popular_eye">
                            <img src={eye2}alt=""/>
                            <p>2,538 students watched</p>
                        </div>
                </div>

                <h5>Professional graphic design tutorial full course with exercise file</h5>
                <p>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
            </div>
            
            <div class="popular_btn2">
                <button>7 Video Classes | 4 hrs</button> 
            </div>

            
          </div>
          <div class="line">
              
          </div>
       

          <div class="popular_items">
            <div class="popular_image">
               <button class="popular_btn">
                <img src={play} alt=""/>
               </button>
            </div>

            <div class="popular_text">
                <div class="popular_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <p> 5.0 (392 reviews)</p>
                    <div class="popular_eye">
                        <img src={eye2} alt=""/>
                        <p>2,538 students watched</p>
                    </div>
            </div>

            <h5>Professional graphic design tutorial full course with exercise file</h5>
            <p>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
        </div>
        
        <div class="popular_btn2">
            <button>7 Video Classes | 4 hrs</button> 
        </div> 
      </div>

    <div class="pro">
      <div class="course">
        <div class="course_1">
          <img src={check} alt=""/>
          <p>How to reduce file pixel dimentions without loosing quality</p>
        </div>
        <div class="course_1">
          <img src={check} alt=""/>
          <p>How to male logo pixel perfects with different extension</p>
        </div>
      </div>

     <div class="courses">
      <div class="course_2">
        <img src={check} alt=""/>
        <p>Create vector file from restarize layer styles</p>
      </div>
      <div class="course_2">
        <img src={check} alt=""/>
        <p>Make color radient with photoshop buid-in tools</p>
      </div>
     </div>
    </div>

        
      
      <div class="line">
          
      </div>

    
   
      <div class="popular_items">
        <div class="popular_image">
           <button class="popular_btn">
            <img src={play} alt=""/>
           </button>
        </div>

        <div class="popular_text">
            <div class="popular_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <p> 5.0 (392 reviews)</p>
                <div class="popular_eye">
                    <img src={eye2} alt=""/>
                    <p>2,538 students watched</p>
                </div>
        </div>

        <h5>Professional graphic design tutorial full course with exercise file</h5>
        <p>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
    </div>
    
    <div class="popular_btn2">
        <button>7 Video Classes | 4 hrs</button>
    </div>

    
  </div>
  <div class="line">
      
  </div>

  

  <div class="popular_items">
    <div class="popular_image">
       <button class="popular_btn">
        <img src="./assets/play-button.svg" alt=""/>
       </button>
    </div>

    <div class="popular_text">
        <div class="popular_star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p> 5.0 (392 reviews)</p>
            <div class="popular_eye">
                <img src={eye2} alt=""/>
                <p>2,538 students watched</p>
            </div>
    </div>

    <h5>Professional graphic design tutorial full course with exercise file</h5>
    <p>Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
</div>

<div class="popular_btn2">
    <button>7 Video Classes | 4 hrs</button>
</div>


</div>
<div class="line">
  
</div>
       
    </section>
  )
}

export default Popular