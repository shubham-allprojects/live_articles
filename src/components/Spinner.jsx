import React from 'react'
import loading from './DefaultImages/loading.gif'

// Component for "lOading" image icon on the page while fetching next 10 articles from api.
const Spinner = () => {
  return (
    <div className='container d-flex justify-content-center'> <img className='spinner' src={loading} alt=".." /></div>
  )
}

export default Spinner