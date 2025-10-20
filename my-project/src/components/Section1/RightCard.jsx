import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden  relative w-80 rounded-4xl '>
      <img className='h-full w-full object-cover ' src={props.image} alt="" />
        <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between  text-white rounded-4xl '>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-black font-semibold text-2xl'>{props.index}</h2>
            <div>
                <p className='text-lg leading-normal'>Description for image {props.index}</p>
                <div>
                    <button className='bg-blue-600 text-white font-semibold rounded-full p-3 hover:bg-blue-200 duration-300'>Satisfied</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default RightCard
