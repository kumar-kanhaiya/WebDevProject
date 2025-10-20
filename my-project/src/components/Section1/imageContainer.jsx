import React from 'react'
import RightCard from './RightCard'

const imageContainer = () => {
  return (
    <div className='h-full w-2/3 p-6  rounded-4xl flex flex-wrap gap-6 justify-center items-center bg-gray-100 overflow-y-scroll'>
        <RightCard index={1} image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688" />
        <RightCard index={2} image="https://images.unsplash.com/photo-1542767352-e98201e84ed8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765" />
        <RightCard index={3} image="https://plus.unsplash.com/premium_photo-1760540928247-905dfca9ab4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" />
        <RightCard index={4} image="https://images.unsplash.com/photo-1760625525684-3564699070a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" />

    </div>
  )
}

export default imageContainer
