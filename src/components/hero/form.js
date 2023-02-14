import Customer from './customer'
import arrow from '../images/twistedArrow.svg'
import circumfrence from '../images/circumfrence.svg'
import bStar from '../images/bigStar.svg'
import guom from '../images/guomCircles.svg'
import React, {useState} from 'react';
import Modal from '../modal';


const Form = () => {
const [openModal, setOpenModal] = useState(false)
  return (
    <div>
        <Customer />
        <div>
            <div className='flex ml-[18%]'>
                <div >
                    <div className=' relative bottom-[30px] '>
                    <p  className='text-center text-white text-[20px] font-normal'>Loyalbaze, empowers businesses to offer digital,
                        mobile-first loyalty programs to their customers.
                        With our AI Powered platform,
                        you can easily create and manage custom loyalty and rewards programs,
                        track customer engagement, and gain valuable insights to improve your business.
                        Sign up now to get early access.
                    </p>
                    </div>
                    <div className='flex justify-center'>
                    <form className='basis-[70%]' >
                        <input required={true} className='block ml-[35%]' type="text" name="" id="" placeholder='Tell us your name' />
                        <input required={true} className='block ml-[35%]' type="text" name="" id="" placeholder='Enter your email address' />
                        <button className='ml-[35%] rounded-[100px] mb-[3%]' onClick={() => setOpenModal(true)}>Get early access</button> 
                        <div className='flex justify-center'>
                            <img className='pl-[35%]' src={guom} alt="" /> 
                            <p className='pl-[5%] pt-[3px] font-[700] text-[#FFFFFF] text-[16px]'>+57 Joined</p>
                        </div>       
                    </form>
                    
                    <div className='basis-[30%] relative bottom-[25px]'>
                        <img src={arrow} alt="" />
                    </div>
                    </div>
                </div>
                <div className='basis-[70%] relative bottom-[120px] object-fill'>
                    <img className='object-fill' src={circumfrence} alt="" />
                    <img className='pl-[35%]' src={bStar} alt="" />
                </div>
            </div>
        </div>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}

export default Form;