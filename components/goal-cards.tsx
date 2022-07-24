import React, { FC } from 'react'

const GoalCards: FC = () => {
    const goal = typeof window !== 'undefined' ? localStorage.getItem('goal') : null

    function Remove() {
        localStorage.removeItem('goal');
        window.location.reload();
    }


    return (
        <div className='bg-black text-white font-sans'>
        <div className='mt-10 flex flex-col justify-evenly  items-center  mx-5 min-h-screen'>
            
            <h1 className='font-normal text-2xl text-center md:text-left'>My Goal for this Year</h1>

            <div suppressHydrationWarning className='text-xl font-semibold my-5'>{goal}</div>

            <button onClick={Remove} className=' btn bg-white text-black hover:bg-black hover:border-2 hover:border-white hover:text-white'>Remove Current Goal</button>
        
        </div>
        </div>
    )
}

export default GoalCards