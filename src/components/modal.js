import correct from '../components/images/correct.svg';


const modal = ({open, onClose}) => {
  if(!open) return null
  return (
    <div id='cont_modal'>
         {/* <button onClick={onClose} className='text-[#FFFFFF]'>x</button> */}
      <div id='modal' className='py-[5%] px-[5%] rounded-[10px] w-[40%] max-sm:w-[90%]'>
      <button  onClick={onClose} className='text-[#FFFFFF]'>x</button>
        <div className='flex justify-center'><img src={correct} alt="" /></div>
        <h3 className="mt-[4%] text-center font-[700] text-[20px] text-[#FFFFFF]">Congratulations</h3>
        <p  className="mt-[1%] text-center font-[400] text-[16px] text-[#FFFFFF]">Great move! You're one step closer to getting your hands on the product.
           Please check your mail for more information.
        </p>
      </div>
    </div>

  )
}
 
export default modal;