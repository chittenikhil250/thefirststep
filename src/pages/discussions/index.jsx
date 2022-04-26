import React,{useState, useEffect}  from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar'
import Img from 'next/image'
import medal from '../../assets/medal.png'
import comment from '../../assets/comments.png'
import Link from 'next/link'
import eye from '../../assets/eye.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import loading1 from '../../assets/loading.gif'



const Discussions = () => {

  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {  
    async function getDiscussionData(){
      setLoading(true)
      const discussionData = await (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
      setDiscussions(discussionData)
      setLoading(false)
      return discussionData
    }
    getDiscussionData();
  }, [])


  const postsPerSlider = 10;
  const [postsCount, setPostsCount] = useState(1);
  const currentPostsCount = postsPerSlider * postsCount;
  const currentPosts = discussions.slice(0, currentPostsCount)


  if(loading){
    return (
    <>
    <Navbar />
    <div className="container mt-5">
    <span className='community l-tilt'>Discussions </span>
    <input className='search' type="text" name="" id=""  placeholder='search for tags, categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍'/>
    <br />
    </div>
    <center>
    <Img width={100} height={100} src={loading1}/>
    </center>
    </>
    )} 


  return (
    <>
    <Navbar/>
    <div className="container mt-5">
    <span className='community l-tilt'>Discussions </span>
    <input className='search' type="text" name="" id=""  placeholder='search for tags, categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍'/>
    <br />
    <h3 className='havesomething'>Have something to discuss?</h3>
    <button className="btn initiatediscussion">INITIATE DISCUSSION </button>
    <div className='disc-map'>
    <h4 className='inb'>Live debates </h4> <span className='dim-text'>(9 Live debates)</span> 
    <Swiper 
    grabCursor={true}
    className='myswiperinterviewpage'
    breakpoints={{
     200:{
       width: 360,
       slidesPerView:1,
       spaceBetween: 30
     },
    640: {
      width: 500,
      slidesPerView: 1,
      spaceBetween: 50
    },
    768: {
      width: 768,
      slidesPerView: 2.7,
      spaceBetween: 30
    },
    992:{
     width: 992,
     slidesPerView: 2,
     spaceBetween: 20
    }
  }}
    >
    {
      currentPosts.map( (item) => (
        <SwiperSlide key={item.id}>
        <div className='discussion-item'>
          <p className="buz-grid-item ml-3 discus-tag">Speech </p> 
          <p className="buz-grid-item ml-3 discus-tag">motivation </p>
          <Link href='/discussions/discussion1'>
          <h5 className='link mt-3'>Do You think achievers are born created ?</h5>
          </Link> 
          <Img className='userprofile' width={30} height={30} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <span className='dim-text'> by Prashanth  </span>
          <span className='medal' ><Img src={medal} alt="" /> {item.id}</span>&nbsp;
          <span className='medal'><Img src={comment} alt="" /> {item.id}</span> &nbsp;
          <span className='medal'><Img src={eye} alt="" /> {item.id}</span> &nbsp;
          <hr />
          <Img className='userprofile' width={25} height={25} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <span className="dim-text">+20 more </span>
          <Link href='/discussions/discussion1'>
          <i className='disnow link'><u>Discuss</u></i>
          </Link>
        </div>
      </SwiperSlide>
      ))
    }
        <SwiperSlide>
            <button className='watch-more' onClick={() => {setPostsCount(()=> postsCount+1)}}>
                <span className='wat-mor'>Watch More</span> <span className='larger'> &gt; </span>
            </button>
        </SwiperSlide>
    </Swiper>
    </div>
    </div>
    </>
  )
}

export default Discussions