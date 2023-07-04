import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <section class="section_one">
    <nav>
      <div class="nav_logo">
        <img src={logo} alt="" />
        <h4>Landguru</h4>
      </div>
      <div class="nav_text">
        <ul>
          <li>Home</li>
          <li>Advertise</li>
          <li>Supports</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>

    <div class="btn">
      <button class="try">Try for free</button>
    </div>
  </section>
  )
}

export default Navbar