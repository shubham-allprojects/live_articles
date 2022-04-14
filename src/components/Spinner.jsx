import React from 'react'
import loading from './DefaultImages/loading.gif'

const Spinner = () => {
  return (
      <div className='container d-flex justify-content-center'> <img className='spinner' src={loading} alt=".."/></div>
  )
}

export default Spinner