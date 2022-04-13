import React from 'react'

const NewsItem = (props) => {
  let { title, desc, Img} = props;
  return (
    <>
    <div className="card mt-1">
      <img src={Img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href="/" className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div>
    </>
  )
}

export default NewsItem