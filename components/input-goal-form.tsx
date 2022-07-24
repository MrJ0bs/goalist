import React, { useState, FC } from 'react'

const InputGoalForm: FC = () => {
    const [goal, setGoal] = useState('')
    const handle = () => {  
        localStorage.setItem('goal', goal);
        window.location.reload();
    }
    return (
        <>
            <div className='block md:relative text-center text-3xl md:text-5xl py-3 mb-10 bg-black text-white max-w-full'> Goals Setter </div>
            <div className='flex flex-row items-center  '>
                <div className=' flex-1 text-xl font-semibold mx-5'>Set Your Goal</div>
                <label htmlFor="modal" className="bg-black hover:bg-white hover:text-black btn modal-button mx-5">Add Goal / Update Goal</label>

                <input type="checkbox" id="modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Welcome Productivity gurus!</h3>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">What is your Goal?</span>
                                <span className="label-text-alt">It can be for a week or month</span>
                            </label>
                            <input type="text" placeholder="Input your goals here" onChange={(e) => {
                                setGoal(e.target.value)                               
                            }} className="input input-bordered w-full " />
                        </div>
                        <div className="modal-action">
                            <label onClick={handle} htmlFor="modal" className="btn" >Save this Goal!</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputGoalForm