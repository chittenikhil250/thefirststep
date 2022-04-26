import React from 'react'
import Navbar from '../../Components/Navbar'
import pinkmedal from '../../assets/pinkprize.png'
import Img from 'next/image'
import {FaShare} from 'react-icons/fa'
import {BsBellFill} from 'react-icons/bs'
import medal from '../../assets/pinkprize.png'
import comment from '../../assets/pinkComments.png'




const discussion1 = () => {

  const responses = [
    {
      name: 'Nikhil',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque placeat quaerat corrupti debitis animi, quam ipsa non earum sequi similique excepturi harum eveniet, totam dolorum sint, blanditiis autem officiis? Sed enim consequatur accusantium exercitationem perferendis? Quaerat fugiat nihil sint enim, provident facere ipsam iste modi aut assumenda? Consequuntur, modi architecto!',
      medals: 4,
      comments: 2
    },
    {
      name: 'Nikhil',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque placeat quaerat corrupti debitis animi, quam ipsa non earum sequi similique excepturi harum eveniet, totam dolorum sint, blanditiis autem officiis? Sed enim consequatur accusantium exercitationem perferendis? Quaerat fugiat nihil sint enim, provident facere ipsam iste modi aut assumenda? Consequuntur, modi architecto!',
      medals: 3,
      comments: 2
    },
    {
      name: 'Nikhil',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque placeat quaerat corrupti debitis animi, quam ipsa non earum sequi similique excepturi harum eveniet, totam dolorum sint, blanditiis autem officiis? Sed enim consequatur accusantium exercitationem perferendis? Quaerat fugiat nihil sint enim, provident facere ipsam iste modi aut assumenda? Consequuntur, modi architecto!',
      medals: 2,
      comments: 2
    }
  ]



  return (
    <>
    <Navbar/>
    <div className="container mt-5">
    <span className='community l-tilt'>Discussions </span>
    <input className='search' type="text" name="" id=""  placeholder='search for tags, categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍'/>
    <br />
    <div className='mt-4'>
    <p className="buz-grid-item ml-3 discus-tag">Speech </p> 
    <p className="buz-grid-item ml-3 discus-tag">motivation </p> <br />
    <h4 className='inb'>Do you think achievers ? </h4>
    <span className='dim-text'> posted {2} min ago </span> 
    <span className='dim-text'><Img src={pinkmedal} alt=''/> give a medal</span> <br />
    <i className='disnow float-none'> <FaShare /> <u>SHARE </u> </i> &nbsp;
    <i className='disnow float-none'><BsBellFill /> <u>FOLLOW </u></i>
    <textarea name="" id="" className='mt-3 discustextreply p-2' placeholder='start writing here...' rows="10"></textarea>
    <button className="btn initiatediscussion m-0">REPLY</button>
    <p className='dim-text mt-3 mb-3'>submitted responses</p>
    {
      responses.map( res => (
        <div className='discussionresponses m-3' key={res.medals}>
          <Img className='userprofile' width={25} height={25} src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <span className="dim-text"> by {res.name}</span>
          <p>{res.comment}</p>
          <span className='medal' ><Img src={medal} alt="" /> {res.medals}</span>&nbsp;
          <span className='medal'><Img src={comment} alt="" /> {res.comments}</span> &nbsp;
        </div>
      ))
    }
    </div>
    </div>
    </>
  )
}

export default discussion1