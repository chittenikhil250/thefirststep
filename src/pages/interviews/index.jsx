import React, {useEffect, useState} from 'react'
import Navbar from '../../Components/Navbar'
import {AiFillFilter} from 'react-icons/ai'
import axios from 'axios'
import Intitem from '../../Components/interviews/InitItem'
import Footer from '../../Components/Footer'



const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos'
})


const Interviews = () => {


  const [ interviewData, setInterviewData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  
  useEffect(() => {
      async function fetchInterviewData(){
        setLoading(true)
        const req = await (await api.get('/')).data;
        setInterviewData(req)
        setLoading(false)
        return req
      }
      fetchInterviewData();
  }, [])

  const postsPerSlider = 10;
  const [postsCount, setPostsCount] = useState(1);
  const currentPostsCount = postsPerSlider * postsCount;
  const currentPosts = interviewData.slice(0, currentPostsCount)
  


  return (
    <>
    <Navbar/>
    <div className="container mt-5">
    <span className='community l-tilt'>Interviews </span>
    <AiFillFilter style={{color: "pink"}} /> 
    <input className='search' type="text" name="" id=""  placeholder='search for tags, categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍'/> <br />
    <h2 className='int-head'>Entrepreneurs</h2>
    <Intitem loading={loading} currentPosts={currentPosts} setPostsCount={setPostsCount} postsCount={postsCount}/>
    </div>
    <Footer/>
    </>
  )
}

export default Interviews 