import sPlanet from '../images/smallPlanet.svg'
import sStar from '../images/smallStar.svg'

const customer = () => {
  return (
    <div>
        <div className='w-[75%] flex flex-row-reverse'>
            <img src={sPlanet} alt="" />
        </div>
        <div className='w-[33%] flex flex-row-reverse'>
            <img src={sStar} alt="" />
        </div>
    </div>
  )
}

export default customer;