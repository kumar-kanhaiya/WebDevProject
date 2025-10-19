import React from 'react'
import Lefttext from './Lefttext'
import imageContainer from './imageContainer'

const center = () => {
  return (
    <div className='py-10 h-[90vh] flex gap-4 px-18'>
        <Lefttext />
        <imageContainer />
    </div>
  )
}

export default center
