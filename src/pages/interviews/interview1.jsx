import React from 'react'
import Navbar from '../../Components/Navbar'
import intervideo from '../../assets/InterVideo.png'
import Img from 'next/image'
import Footer from '../../Components/Footer'



const Interview = () => {
  return (
    <>
    <Navbar />
    <div className="container mt-5">
    <span className='community l-tilt'>Interviews </span>
    <input className='search' type="text" name="" id=""  placeholder='search for tags, categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍'/> <br />
    <Img src={intervideo} className='intervideo' alt="" />
    <h2 className='intitle'>Breaking taboos with Riddhi Javali</h2>
    <span className="buz-grid-item m5"> hello </span>
    <span className="buz-grid-item m5"> hello world </span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus dolorem est, accusantium repudiandae sapiente, quo eaque molestias eum dicta inventore praesentium eveniet optio cumque tempore quaerat labore error laudantium illo exercitationem nulla quas architecto laboriosam? Est porro asperiores alias atque ratione neque quaerat qui sed! Cum ad corporis libero?</p>
    </div>
    <Footer/>
    </>
  )
}

export default Interview