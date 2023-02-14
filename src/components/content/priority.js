import sPlanet from '../images/smallPlanet.svg'
import rakuten from '../images/rakuten.svg'
import sStar from '../images/smallStar.svg'
import bStar from '../images/bigStar.svg'
import zigzag from '../images/zigZag.svg'


const priority = () => {
    
  return (
    <div className=''>
        <div className='flex mt-[5%]'>
            <div className='basis-[50%] pl-[5%] pr-[5%]'>
                <div className='flex justify-between'>
                    <div><img src={sPlanet} alt="" /></div>
                    <div className='pt-[50px]'><img src={rakuten} alt="" /></div>
                </div>
                <div className='pl-[60%] mt-[5%]'>
                    <img src={sStar} alt="" />
                </div>
                <div className='mt-[5%]'>
                    <h1 className='text-center font-[700] text-[54px] text-[#FFFFFF]'>Priority Access</h1>
                    <div className='flex justify-center mb-[3%]'>
                    <img src={zigzag} alt="" />
                    </div>
                    <p className='text-center font-[500] text-[20px] text-[#FFFFFF]'>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze.
                    Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available.
                    Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!
                    </p>    
                </div>
                <div className='flex flex-row-reverse mt-[5%]'>
                   <img src={bStar} alt="" />
                </div>
            </div>
            <div className='basis-[50%]'>
                <div className='pl-[70%]'>
                    <img src={rakuten} alt="" />
                </div>
                <form className='mt-[5%] bg-[#1D2939] rounded-[20px] justify-center text-center w-[85%] pt-[5%] pb-[7%]'>
                    <h3 className='mb-[5%] font-[700] text-[24px] text-[#FFFFFF]'>Book a Consultation with us</h3>
                    <div id='formtwo'>
                    <input type="text" placeholder='Enter your full name' required={true} />
                    <input type="email" placeholder='Enter your work email' required={true} />
                    <input type="text" placeholder='Mobile number' required={true} />
                    <input type="text" placeholder='Company Name' required={true} />
                    
                    <select name="" id="" >
                        <option value="">Select Country</option>
                        <option value="">Nigeria</option>
                        <option value="">Ghana</option>
                        <option value="">France</option>
                    </select>
                    </div>
                    <textarea className='required={true} w-[80%] rounded-[10px] pl-[3%] pt-[3%]' rows="4"  name="" id="" placeholder='Drop a message.....'></textarea>
                    <button className='mt-[4%] w-[80%] h-[50px] rounded-[110px]'>Send Request</button>
                </form>
                <div className='pl-[70%] mt-[3%]'>
                    <img src={bStar} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default priority;