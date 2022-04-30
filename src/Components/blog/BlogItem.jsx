import React from 'react'
import loading1 from '../../assets/loading.gif'
import logo from '../../assets/logo.png'
import medal from '../../assets/medal.png'
import eye from '../../assets/eye.png'
import comment from '../../assets/comments.png'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import audioBook from '../../assets/audiobook.png'
import Link from 'next/link'
import Img from 'next/image'



const BlogItem = ({loading, blogData}) => {



    const blogArray = blogData.slice(0, 10);
    if(loading){
        return <Img src={loading1} alt='' width={100} height={100}/>
    }
  return (
    <>
    <div className="blogcontainer row">
    {blogArray.map( item => (
        <LazyLoadComponent key={item.id}>
        <div className="col-lg-6 blogitem" key={item.id}>
        <Img src={logo} width={100} className='blog-logo' alt="" />
        <div>
        <Link href='/blog/post'>
        <span className='link' >{item.title.substr(0, 20)} &nbsp;</span>
        </Link>
        <span className='medal' ><Img src={medal} alt="" /> {item.id}</span>&nbsp;
        <span className='medal'><Img src={eye} alt="" /> {item.id}</span> &nbsp;
        <span className='medal'><Img src={comment} alt="" /> {item.id}</span> <br />
        <span className='date-blog'>24/02/2003</span> &nbsp;
        <span className='duration-blog'> ⏱ 3 min </span> &nbsp;
        <span className="buz-grid-item ml-3 blog-tag">{(item.id)*3} hello </span> &nbsp;
        <Img src={audioBook} className='audiobook' alt="" />
        </div>
        <p>
            {item.body.substr(0, 100)}
        </p>
        </div>
        </LazyLoadComponent>
        ) )}
    </div>
    </>
  )
}

export default BlogItem