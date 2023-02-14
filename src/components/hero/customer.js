import Himg from './heroimg'
import bPlanet from '../images/bigPlanet.svg'
import sStar from '../images/smallStar.svg'

const customer = () => {
  return (
    <div>
        <Himg />
        <div className=''>
            <div className='flex'>
            {/* <div className='border-[2px] border-[solid] border-rose-900'> */}
                <div className='basis-[20%] relative bottom-[15px]'>
                    <img className='ml-[25px]' src={bPlanet} alt="" />
                </div>
                <div className='basis-[55%]'>
                    <h1 className='text-center text-white text-[54px] font-black'>Turn your best customers into 
                     <span className='text-[#A75FD2]'> Loyal fans</span>
                    </h1>
                </div>
                <div className='basis-[10%] pt-[65px] pl-[40px]'>
                    <img src={sStar} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default customer;