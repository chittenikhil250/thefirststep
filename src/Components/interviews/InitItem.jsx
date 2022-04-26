import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from 'next/image'
import 'swiper/css';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import loading1 from '../../assets/loading.gif'

const Intitem = ({loading, currentPosts, postsCount, setPostsCount}) => {

    if(loading){
        return <Img src={loading1} alt='' width={100} height={100}/>
    } 
  return (
    <>
    <Swiper 
       grabCursor={true}
       className='myswiperinterviewpage'
       breakpoints={{
        200:{
          width: 360,
          slidesPerView:1.2,
          spaceBetween: 0
        },
       640: {
         width: 500,
         slidesPerView: 2.2,
         spaceBetween: 50
       },
       768: {
         width: 768,
         slidesPerView: 2.7,
         spaceBetween: 30
       },
       992:{
        width: 992,
        slidesPerView: 3.5,
        spaceBetween: 50
       }
     }}
       >
            {currentPosts.map( (img) =>(
              <LazyLoadComponent key={img.albumId}>
              <SwiperSlide key={img.id} > 
              <Link href='/interviews/interview1'> 
                <LazyLoadImage effect='blur' src={img.url} alt='' className='carousel-image-int' /> 
              </Link>
                <h6>{img.title}</h6>
                <span className="buz-grid-item m5">{(img.id)*3} hello </span>
                <span className="buz-grid-item m5">{(img.albumId)*3} hello </span>
                <p>{img.title}</p>
              </SwiperSlide>
              </LazyLoadComponent>
            ))}
            <SwiperSlide>
              <button className='watch-more' onClick={() => {setPostsCount(()=> postsCount+1)}}>
                <span className='wat-mor'>Watch More</span> <span className='larger'> &gt; </span>
              </button>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Intitem