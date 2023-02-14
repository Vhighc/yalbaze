import Form from './form'
import bStar from '../images/bigStar.svg'

const hero = () => {
  return (
    <div>
        <Form />
        <div className='ml-[10%] relative bottom-[65px]'><img src={bStar} alt="" /></div>
    </div>
  )
}

export default hero;