import React from 'react'
import Lefttext from './Lefttext'
import ImageContainer from './imageContainer'

const Center = () => {
  return (
    <div className='py-10 h-[90vh] flex gap-4 px-18'>
        <Lefttext />
        <ImageContainer />
    </div>
  )
}

export default Center
