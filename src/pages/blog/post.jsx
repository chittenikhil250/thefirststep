import React from 'react'
import Navbar from '../../Components/Navbar'
import logo from '../../assets/logo.png'
import audioBook from '../../assets/audiobook.png'
import medal from '../../assets/medal.png'
import eye from '../../assets/eye.png'
import pinkvoice from '../../assets/pinkVoice.png'
import pinkmedal from '../../assets/pinkPrize.png'
import pinkcomment from '../../assets/pinkComments.png'
import comment from '../../assets/comments.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LinkedIn from '../../assets/LinkedIn Circled.png'
import Instagram from '../../assets/Instagram Circle.png'
import Twitter from '../../assets/Twitter Circled.png'
import CopyLink from '../../assets/Link.png'
import Img from 'next/image'


const BlogTemplate = () => {
  return (
    <>
    <Navbar/>
    <div className="container mt-5">
    <span className='community l-tilt'>BLOGS</span>
    <div className="blogtemp">
    <Img src={logo} alt="" className='blogtemplogo' width={110} /> &nbsp;&nbsp;
    <p className='presents-blog'>presents</p> <br />
    <h4 className='blog-title'>Title name here</h4>&nbsp;
    <span className='medal' ><Img src={medal} alt="" /> 1</span>&nbsp;
    <span className='medal'><Img src={eye} alt="" /> 2</span> &nbsp;
    <span className='medal'><Img src={comment} alt="" /> 3</span> <br />
    <span className='date-blog'>24/02/2003</span> &nbsp;
    <span className='duration-blog'> ⏱ 3 min </span> &nbsp;
    <span className="buz-grid-item ml-3 blog-tag">{(1)*3} hello </span> &nbsp;
    <LazyLoadImage src={audioBook} alt="" />
    <p className='blog-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam obcaecati nesciunt quaerat, id nihil minima? Qui aut voluptates cupiditate eligendi. Aliquam quod eveniet ab quam reiciendis ex ut numquam iure voluptatibus veniam, dolore illo porro assumenda corrupti unde veritatis suscipit, cupiditate et aperiam placeat corporis. Praesentium temporibus quam animi rerum quod molestiae, minus recusandae deserunt quae officia debitis sit alias porro beatae consectetur dolore doloremque eaque non placeat similique enim laudantium velit. Porro laudantium quibusdam quae tempora commodi voluptatum expedita, sunt necessitatibus officiis excepturi quidem distinctio nisi atque! Aut autem repellat, deserunt quasi dolor laborum perferendis dolorum laboriosam, numquam tenetur at id similique exercitationem corporis blanditiis ea deleniti possimus! Ut pariatur unde, dolores perferendis atque quisquam dolor non saepe eos inventore optio est voluptas commodi aliquid veritatis soluta dicta at, enim beatae quidem! Odit sint harum beatae temporibus, esse aliquid suscipit magni quaerat vitae voluptatum tenetur excepturi culpa, illum impedit commodi aut incidunt. Laborum perspiciatis nam deleniti autem rem eos dignissimos accusantium sequi libero quisquam. Totam esse officia, quos nisi cum fugiat. Ducimus labore deserunt quod iusto nobis nisi at doloribus, repellat quas atque libero sint voluptatem assumenda porro ullam fugiat ipsum inventore dolore. Obcaecati maiores minima pariatur eius illum?</p>
    <hr className='hr' />
    </div>
    </div>    
    <div className='blogside'>
      <p className='blogsidetext'>voice read </p>
      <Img src={pinkvoice} alt="" />
      <p className='blogsidetext'>react</p>
      <Img src={pinkmedal} alt="" /> <span className='blogsidetext'>4 </span>
      <Img src={pinkcomment} alt="" /> <span className='blogsidetext'>4 </span>
      <p className='blogsidetext'>share</p>
      <Img src={Twitter} alt="" /> &nbsp;
      <Img src={LinkedIn} alt="" />  &nbsp;
      <Img src={Instagram} alt="" />&nbsp; 
      <Img src={CopyLink} alt="" /> &nbsp;
    </div>
    </>
  )
}

export default BlogTemplate