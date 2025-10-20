import React from 'react'

const Lefttext = () => {
  return (
    <div className='h-full w-1/3 py-4 px-18 flex flex-col justify-center '>
        <div className='p-6'>   
            <h1 className='text-6xl font-bold leading-tight'>Prospective<br/><span className='text-gray-900 rounded-full  py-1'>Customer</span> Segmentation <br /></h1>
            <p className='mt-4 text-lg font-medium text-gray-600'>Experience the future of banking with our innovative solutions.</p>
        </div>
        <div>
            <button className='mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300'>Get Started</button>
        </div>
    </div>
  )
}

export default Lefttext
