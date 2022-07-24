/* eslint-disable react/no-unknown-property */
import Image from 'next/image'
import React, { FC } from 'react'

interface props {

}

const NavigationBar: FC = () => {
  return (
    <div className="navbar bg">
      <div className="flex-1">
       <Image src='/goalist.svg' width={50} height={50} alt='goalist' />
      </div>
      <div className="flex-none">
      <div className="dropdown dropdown-left">
  <label tabIndex={0} className="btn m-1 bg-black">About</label>
  <div tabIndex={0} className="dropdown-content card card-compact w-64  shadow bg-primary text-primary-content">
    <div className="card-body bg-black text-white">
      <h3 className="card-title">This is a Demo!</h3>
      <p>This application will store your data in the local-storage of your browser.</p>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default NavigationBar
