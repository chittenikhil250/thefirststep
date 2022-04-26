import React from "react";
import Link from 'next/link'
import logo from "../assets/logo.png"
import Img from 'next/image'


const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg'>
                <div className="container-fluid">
                    <Img className='navbar-brand mp-nav' width={164} src={logo} alt="The first step" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </button>
                    <div className="container collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className='navbar-nav ul-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-ka-items'> 
                                    <Link href='/'>
                                        <span className="link">Home</span> 
                                    </Link>
                                </li>
                                <li className='nav-ka-items '>
                                    <Link href='/interviews'>
                                        <span className="link">Interviews</span>
                                    </Link>  
                                </li>
                                <li className='nav-ka-items '>
                                    <Link href='/podcasts'>
                                        <span className="link">Podcasts</span>
                                    </Link>
                                </li>
                                <li className='nav-ka-items '>
                                    <Link href='/discussions'>
                                        <span className="link">Discussions</span>
                                    </Link> 
                                </li>
                                <li className='nav-ka-items '>
                                    <Link href='/blog'>
                                        <span className="link">Blog</span>
                                    </Link> 
                                </li>
                                <li className='nav-ka-items '>
                                    <Link href='/contact'>
                                        <span className="link">Contact</span>
                                        {/* <> */}
                                        {/* contact  */}
                                        {/* <select name="contactdropdown" id="contactdropdown"></select> */}
                                        {/* </> */}
                                    </Link>  
                                </li> 
                            </ul>
                        <ul className="navbar-nav ul-nav ul-nav-2 ms-auto mb-2 mb-lg-0">
                            <li className='nav-ka-items'>
                                <Link href='/'>
                                     <button className="btn btn-1">SIGN IN</button>
                                </Link>  
                            </li>
                            <li className='nav-ka-items'>
                                <Link href='/'>
                                    <button className="btn btn-2">LOG IN</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  );
};

export default Navbar;
