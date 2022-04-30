import React from 'react'
import {BsLinkedin, BsYoutube} from 'react-icons/bs'
import Link from 'next/link'


const Footer = () => {
  return (
    <>
    <footer>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-lg-5 order4">
          <h6>OUR SLOGAN</h6>
          <ul className='ful'>
              <li>The first step is believing yourself</li>
              <li>The first step is about your first dream</li>
              <li>It is about encouraging others with your story</li>
              <li>The first step is accepting your first compliment with grace</li>
              <li>The first step is about attracting positive energy from the cosmos</li>
          </ul>
          <h6>OUR MISSION</h6>
          <ul className='ful'>
              <li>The first step is believing yourself</li>
          </ul>
          </div>
          <div className="col-lg-2">
          <h6>QUICK LINKS</h6> 
          <ul>
              <li>
              <Link href="/interviews">
               <a className='flink'>Interviews</a>
              </Link> 
              </li>
              <li>
              <Link href='/podcasts'>
               <a className='flink'>Podcasts</a>
              </Link>  
              </li>
              <li>
              <Link href='/discussions'>
               <a className='flink'>discussions</a>
              </Link>
              </li>
              <li>
              <Link href='/blog'>
               <a className='flink'>Blogs</a>
              </Link>
              </li>
          </ul>
          </div>
          <div className="col-lg-2">
          <h6>FIND US ON </h6>
            <a href="https://www.youtube.com/c/TheFirstStepHasini" rel='noreferer' target='_blank'>
            <BsYoutube className='f-icons'/>
            </a>
            <a href="https://www.linkedin.com/company/the-first-step-hasini/?originalSubdomain=in" rel='noreferer' target='_blank'>
            <BsLinkedin className='f-icons'/>
            </a>
          </div>
          <div className="col-lg-2 order3">
          <h6 className='support'>SUPPORT US </h6>
            <p>Your support will help us produce high quality interviews</p>
            <span>
                <a href="/"> <i> CONTRIBUTE HERE</i></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer