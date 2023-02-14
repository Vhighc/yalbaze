import house from '../images/padlock.svg'
import phone from '../images/phone.svg'

const footer = () => {
  return (
    <div>
        <div  className='mx-[7%] mt-[6%]'>
            <div className='mb-[3%]'>
                <hr className='text-[#FFFFFF] h-[1px] ' />
            </div>
            <div className='flex justify-between'>
                <div className='flex basis-[30%]'>
                    <div className=''>
                        <img src={house} alt="" />
                    </div>
                    <p className='text-[16px] text-[#FFFFFF] font-[400] ml-[6%]'>
                        2nd Floor, The Garnet Building, KM14 <br />
                        Lekki Epe Expressway, Lagos, Nigeria.
                    </p>
                </div>
                <div className='basis-[25%]'>
                    <p className='text-[20px] text-[#FFFFFF] font-[700] text-center'>
                        Loyalbaze is almost here.
                    </p>
                </div>
                <div className='flex basis-[25%] justify-end'>
                    <div className='pt-[1%] pr-[3%]'><img src={phone} alt="" /></div>
                    <div className='pr-[5%]'><p className='text-[16px] text-[#FFFFFF] font-[400]'>+234 903 618 9485</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer;