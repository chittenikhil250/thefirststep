import React, {useState, useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import {AiFillFilter} from 'react-icons/ai'
import BlogItem from '../../Components/blog/BlogItem'
import axios from 'axios'
import Pagination from '../../Components/Pagination'


const Blog = () => {
  
  const [ blogData, setBlogData ] = useState([]);
  useEffect(() => {
    async function fetchBlogData(){
      setLoading(true)
      const req = await (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
      setBlogData(req)
      setLoading(false)
      return req
    }
    fetchBlogData();
}, [])


  const postsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const [ loading, setLoading ] = useState(false);
  

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
    <span className='community l-tilt'>Blogs </span>
    <AiFillFilter style={{color: "pink"}} /> 
    <input className='search' type="text" name="" id=""  placeholder='search for tags, categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍'/> <br />
    <BlogItem 
    loading={loading} blogData={currentPosts}
    />
    <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={blogData.length*0.5} />
    </div>
    </>
  )
}

export default Blog