import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }


  return (
    <>
    <center>
    <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link">Previous</a></li>
                {pageNumbers.map(num => (
                <li key={num} className="page-item"><a className="page-link" onClick={() => paginate(num)} key={num} href="#">{num}</a></li>
                ))}
                <li className="page-item"><a className="page-link">Next</a></li>
            </ul>
        </nav>
    </center>
    </>
  )
}

export default Pagination