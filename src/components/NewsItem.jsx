import React from 'react'
import defaultImage from './DefaultImages/noImg.png'

const NewsItem = (props) => {
  // Props from News component.
  let { title, Img, read_more, date, source } = props;
  return (
    <>
      {/* Display Each component in Card */}
      <div className="card shadow mt-4 ">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">Source:{source}</span>
        <div className='text-center'><img src={Img ? Img : defaultImage} className="card-img-top" alt="..." /></div>
        <div className="card-body">
          <p className="card-title fw-bold">{title}</p>
          <p><small className="badge bg-warning text-dark p-1">{new Date(date).toLocaleDateString()} - {new Date(date).toLocaleTimeString()}</small></p>
          <a rel="nonreferrer" href={read_more} className="cart-text btn btn-sm btn-info fw-bold">Read More</a>
        </div>
      </div>
    </>
  )
}

export default NewsItem