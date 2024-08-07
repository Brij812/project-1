import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
           YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES</p>
         <div className='hero-button'>
          <button>Shop Now</button>
          <button className='secondary-button'>Category</button>  
        </div>  
        <div className='shopping'>
            <p>Also available on</p >
            <div className='Brand-icons'>
            <img src="./public/images/flipkart.png" alt="Flipkart" />
            <img src="./public/images/amazon.png" alt="Amazon" />
            </div>
        </div>
        </div>   
        <div className='hero-image'>
            <img src="./public/images/shoe_image.png" alt="Hero_image" />
        </div>

    </main>
  )
}

export default Hero