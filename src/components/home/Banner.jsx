import React from 'react';
import Image from 'next/image';
import Layout from '../Layout';

const Banner = () => {
  return (
    <Layout>
      <div>
        <div className='hero min-h-screen'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <Image
              src='/../public/images/imageBanner.png'
              className='max-w-sm rounded-lg shadow-2xl'
              width={400}
              height={200}
              alt='pic'
            />
            <div>
              <h1 className='text-5xl font-bold'>
                The Fastest Way To Send Anything To Anywhere.
              </h1>
              <button className='btn btn-primary my-5'>See More Details</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
