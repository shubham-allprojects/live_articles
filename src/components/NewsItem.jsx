import React from 'react'
import defaultImage from './DefaultImages/noImg.png'

const NewsItem = (props) => {
  // Props from News component.
  let { title, Img, read_more, date, source } = props;
  return (
    <>
      {/* Display Each component in Card */}
      <div className="card shadow mt-md-3 mt-3">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">Source:{source}</span>
        <div className='text-center'><img src={Img ? Img : defaultImage} className="card-img-top" alt="..." /></div>
        <div className="card-body">
          <p className="card-title fw-bold">{title}</p>
          <div className='d-flex'>
            <p><small className="badge bg-warning text-dark p-1 p-md-1 mx-md-1">{new Date(date).toLocaleDateString()} - {new Date(date).toLocaleTimeString()}</small></p>
            <a rel="nonreferrer" href={read_more} className="text-decoration-none text-primary fw-bold read-more mx-2">Read More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsItem