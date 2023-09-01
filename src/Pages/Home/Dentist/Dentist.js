import React from 'react';
import './Dentist.css';
import image from '../../../images/house-of-doctors-providers-of-reliable-care-medicircle.jpg'

const Dentist = () => {
    return (
      <div class="blog-container">
      <div class="blog-content">
          <h2>Porvide Service</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit accusantium expedita possimus? Perspiciatis vel, sapiente facere dolore nostrum at possimus dolorem minus temporibus quis exercitationem, reiciendis laudantium enim in.</p>
          <button className='btn'>Explore</button>
      </div>
      <div class="blog-image">
          <img src={image} alt=''/>
      </div>
  </div>
        
    );
};

export default Dentist;