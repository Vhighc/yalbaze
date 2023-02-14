import React from 'react'
import logo from '../images/logoIcon.svg'

const navbar = () => {
  return (
    <div>
      <div className='mt-[2%] flex mx-[7%] justify-between'>
        <div>
            <img className='w-[100px] h-[50px]' src={logo} alt={""} />
        </div>
        <div id='nav' className=''>
            <button  className='w-[190px] h-[50px]  text-[#FCFCFC] text-[16px] font-bold'>Get Priority Access</button>
        </div>
      </div>
    </div>
  )
}

export default navbar;
