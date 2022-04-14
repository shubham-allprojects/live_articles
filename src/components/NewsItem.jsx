import React from 'react'
import defaultImage from './DefaultImages/noImg.png'

const NewsItem = (props) => {
  let { title, desc, Img, read_more, date } = props;
  return (
    <>
      <div className="card mt-3">
        <img src={Img ? Img : defaultImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p><span class="badge bg-danger">{new Date(date).toLocaleDateString()} - {new Date(date).toLocaleTimeString()}</span></p>
          <a rel="nonreferrer" href={read_more} className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </>
  )
}

export default NewsItem