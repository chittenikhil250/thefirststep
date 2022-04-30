import React from "react";
import Navbar from "../../Components/Navbar";
import scroll from "../../assets/scroll.png";
import cutegirl from "../../assets/cutegirl.png";
import mystory1 from "../../assets/mystory1.png";
import mystory2 from "../../assets/mystory2.png";
import Img from 'next/image'
import mystory3 from "../../assets/mystory3.png";
import Footer from '../../Components/Footer'


const Speaker = () => {
  return (
    <>
      <Navbar />
      <div className="speaker pt-5">
        <center>
          <Img src={cutegirl} width={500} height={450} className="pt-3 cutegirl" alt="" />
        </center> 
      </div>
      <center>
        <div className="scroll">
          <Img src={scroll} alt="" />
        </div>
      </center>
      <div className="contact-story container mt-5">
        <center>
          <span className="community l-tilt">My Story </span>
        </center>
        <div className="row mt-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <h4 className="black">How did it all begin? </h4>
            <p className="dim-text">
              One day she attended an event where her father was a speaker along
              with the chief guest Mr Sujith Kumar, the founder of the Matram
              foundation. This girl who always talked a dime to a dozen was
              silent for once and was listening to every single word that was
              spoken that day. She was never like this- always hyper and never
              sitting still in one place especially when someone is talking .
              That day this girl went back to her father and said “ I have found
              out something else I would like to give a try. I want to inspire
              people <span className="base">especially children </span>”
            </p>
            <p className="dim-text">
              This girl is none other than ME, HASINI, A 7TH GRADER, CEO OF
              FIRSTSTEP AND ALSO THE YOUNGEST JOURNALIST IN THE STATE.
            </p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <center>
            <Img src={mystory1} width={330} className="ml-5" alt="" />
            </center>
          </div>
        </div>
        <div className="row mt-5">
        <center>
          <span className="community l-tilt mb-5">Professional  </span>
        </center>
          <div className="col-lg-6">
            <center>
            <Img src={mystory2} className='ml-5'/>
            </center>
          </div>
          <div className="col-lg-6">
            <h4 className="black">Our mission </h4>
            <p className="dim-text">To empower children</p>
            <h4 className="black">Our slogan</h4>
            <ul className="dim-text culont">
              <li>The first step is about your first dream</li>
              <li>The first step is believing yourself</li>
              <li>The first step is accepting your first compliment with grace</li>
              <li>The first step is about attracting positive energy </li>
              <li>It is about encouraging others with your story</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 mb-5">
        <center>
          <span className="community mb-5 l-tilt">Achievements </span>
        </center>
          <div className="col-lg-6 order-2 order-lg-1">
          <ul className="culont">
          <li className="dim-text my-2">Journalists of Brainfeed Magazine</li>
          <li className="dim-text my-2">VJ for Avatar Live and Aval Glitz</li>
          <li className="dim-text my-2">Youngest journalist in the state</li>
          <li className="dim-text my-2">Global Kids Achiever Award - youtuber</li>
          </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <center>
            <Img src={mystory3} height={180} alt="" />
            </center>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Speaker;
