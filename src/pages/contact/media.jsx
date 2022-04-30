import React from 'react'
import Navbar from '../../Components/Navbar'
import img from '../../assets/media.png'
import medal from '../../assets/darkprize.png'
import hindu from '../../assets/HINDU.png'
import tamil from '../../assets/TAMIL.png'
import buzzfeed from '../../assets/BRAINFEED.png'
import Img from 'next/image'
import Footer from '../../Components/Footer'



const Media = () => {
  return (
    <>
    <Navbar />
    <div className="mediapage">
        <div className="container pt-5">
            <h4 className='black'>Read our amazing work in the news</h4>
            <div className="titlemedia mb-1">
                <Img src={hindu} width={150} height={80} alt="" /> <span className='mt-n5 dim-text'>4 articles</span>
            </div>
            <div className='mediaimg'>
            <Img src={img} alt="" width={200} />
            <span className='medianame'> 
            <a href="#" className='anchor'>Love of Robotics</a>
            <span> <Img src={medal} alt="" /> 4 </span>
            </span>
            </div>
            <div className="titlemedia mt-5 mb-3">
                <Img src={tamil} width={150} height={80} alt="" /> <span className='mt-n5 dim-text'>4 articles</span>  
            </div>
            <div className='mediaimg'>
            <Img src={img} alt="" width={200} />
            <span className='medianame'> 
            <a href="#" className='anchor'>Love of Robotics</a>
            <span> <Img src={medal} alt="" /> 4 </span>
            </span>
            </div>
            <div className="titlemedia mt-5 mb-4">
                <Img src={buzzfeed} width={150} height={50} alt="" /> <span className='mt-n5 dim-text'>4 articles</span>
            </div>
            <div className='mediaimg mb-5'>
            <Img src={img} alt="" width={200} />
            <span className='medianame'> 
            <a href="#" className='anchor'>Love of Robotics</a>
            <span> <Img src={medal} alt="" /> 4 </span>
            </span>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Media