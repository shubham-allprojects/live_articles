import React from 'react'
import defaultImage from './DefaultImages/noImg.png'

const NewsItem = (props) => {
  // Props from News component.
  let { title, desc, Img, read_more, date, source } = props;
  return (
    <>
      {/* Display Each component in Card */}
      <div className="card mt-4 shadow">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">Source:{source}</span>
        <img src={Img ? Img : defaultImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p><span className="badge bg-warning text-dark">{new Date(date).toLocaleDateString()} - {new Date(date).toLocaleTimeString()}</span></p>
          <a rel="nonreferrer" href={read_more} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}

export default NewsItem