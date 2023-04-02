import React from 'react';
import Image from 'next/image';
import Layout from '../Layout';

const Banner = () => {
  return (
    <Layout>
      <div className='carousel w-full min-h-screen'>
        <div id='slide1' className='carousel-item relative w-full'>
          <Image
            src='/../public/images/imageBanner.png'
            width={200}
            height={200}
            layout='responsive'
            alt='pic'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <Image
            src='/../public/images/BannerImage2.png'
            width={200}
            height={200}
            layout='responsive'
            alt='pic'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <Image
            src='/../public/images/BannerImage4.png'
            width={200}
            height={200}
            layout='responsive'
            alt='pic'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <Image
            src='/../public/images/BannerImage2.png'
            width={200}
            height={200}
            layout='responsive'
            alt='pic'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
