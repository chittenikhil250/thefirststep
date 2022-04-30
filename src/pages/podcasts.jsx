import React, { useState, useEffect, Suspense, lazy } from 'react'
import Navbar from '../Components/Navbar'
import medal from '../assets/medal.png'
import ear from '../assets/ear.png'
import {AiFillFilter} from 'react-icons/ai'
import comment from '../assets/comments.png'
import latest from '../assets/latest.png'
import oldest from '../assets/oldest.png'
import axios from 'axios'
import Pagination from '../Components/Pagination'
import loading1 from '../assets/loading.gif'
import Img from 'next/image'
import Footer from '../Components/Footer'





const PodItem = lazy(() => import('../Components/podcast/Poditem'))


const Podcasts = () => {


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10

  useEffect(() => {
    const fetchPosts = async () =>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
    <>
      <Navbar/>
      <div className="container mt-5">
      <span className='community l-tilt'>Podcasts </span>
      <input className='search search-pod' type="text" name="" id=""  placeholder='search for tags, titles, dates and authors&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔍'/> <br />
      <Suspense fallback={<Img alt='' src={loading1} />}>
      <PodItem posts={currentPosts} loading={loading}/>
      </Suspense>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length*0.009} paginate={paginate}/>
      <div className="sort-pod">
        <center>
          <AiFillFilter size={30} style={{color: "pink"}}/> <br />
          <span className='dim-text'> Filter from {posts.length} podcasts </span>
        </center>
        <ul className="sort-li">
          <li className="dim-text medalli">
            <span className='medal'><Img src={medal} alt="" /> </span>&nbsp; <p className='sort-names'>Medals</p> <input type="checkbox" name="" id="" />
          </li>
          <li className="dim-text duralli">
            ⏱ <p className='sort-names'>Duration</p> <input type="checkbox" name="" id="" />
          </li>
          <li className="dim-text hearli">
            <span className='medal'><Img src={ear} alt="" /></span>&nbsp; <p className='sort-names'>Hears</p> <input type="checkbox" name="" id="" />
          </li>
          <li className="dim-text commentli">
            <span className='medal'><Img src={comment} alt="" /> </span> &nbsp;<p className='sort-names'>Comments</p> <input type="checkbox" name="" id="" />
          </li>
          <li className="dim-text latestli">
            <span className='medal'><Img src={latest} alt="" /></span>&nbsp;<p className='sort-names'>Latest</p><input type="checkbox" name="" id="" />
          </li>
          <li className="dim-text oldestli">
            <span className='medal'><Img src={oldest} alt="" /></span>&nbsp;<p className='sort-names'>Oldest</p><input type="checkbox" name="" id="" />
          </li>
        </ul>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Podcasts