import React from 'react';
//import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
//import link
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'> 
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/*text */}
          <div className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p>
               In my portfolio, you'll find a diverse collection of images that reflect my journey behind the lens.
              <b>From breathtaking landscapes to intimate portraits, each photograph tells a unique story and invites you to explore the world through my perspective.</b>
              <br />
              <br />
              Photography isn't just a profession for me, it's my life's passion. From the click of the shutter to the final edit, I pour my heart and soul into every image, ensuring each photograph reflects my vision and the essence of the moment captured.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] max-auto lg:mx-0'>
              Hire Me
            </Link>
          </div>
          {/* image grid */}
          <div className='grid grid-cols-2 lg:gap-2'>
            {/* image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'> 
              <img 
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Image1} alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'> 
              <img 
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Image2} alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'> 
              <img 
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Image3} alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'> 
              <img 
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Image4} alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
