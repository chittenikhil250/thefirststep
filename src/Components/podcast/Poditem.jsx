import React from 'react'
import logo from '../../assets/logo.png'
import medal from '../../assets/medal.png'
import ear from '../../assets/ear.png'
import audio from '../../assets/music.mp3'
import comment from '../../assets/comments.png'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import loading1 from '../../assets/loading.gif'
import Img from 'next/image'





const PodItem = ({posts, loading}) => {


  const keygen = function(){
    return (Math.random() * 1000) + (Math.random() * 1000)
  }

  if(loading){
      return (
        <center><Img src={loading1} alt="" width={100} height={100} /></center>
      )
  }

  return (
    <>
        {
        posts.map(item => (
          <LazyLoadComponent key={keygen()}>
          <div className="podcast-item" key={keygen()}>
            <Img src={logo} className='podcast-logo' alt="" /> 
            <span className='date-podcast'>24/02/2003</span> 
            <span className='duration-podcast'> ⏱ 30 min </span> <br />
            <h4 className='pod-title'>{item.title}</h4>&nbsp;&nbsp;
            <span className='medal' ><Img src={medal} alt="" /> {item.id}</span>&nbsp;
            <span className='medal'><Img src={ear} alt="" /> {item.albumId}</span> &nbsp;
            <span className='medal'><Img src={comment} alt="" /> {item.albumId}</span> 
            <br />
            <p className="buz-grid-item m5">speech </p>
            <p className="buz-grid-item m5">motivatoin</p> <br />
            <p className='pod-para'>Lorem ipsum dolor sit amet consectetur adipis placeat laudantium error....</p>
            <LazyLoadImage effect="blur" src={item.url} className='inline pod-data-img' alt="" /> <br />
            <audio controls>
              <source src={audio} type="audio/mpeg"></source>
            </audio>
            <hr className='pod-hr' />
          </div>
          </LazyLoadComponent>
        ))
      }
      
    </>
  )
}

export default PodItem