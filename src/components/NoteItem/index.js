
import './index.css'

const Card = ({title,description}) => {
  console.log(title,description)
  return (
    <li className='CardContainer'>
      <h1 className='CardHeading'>{title}</h1>
      <p className='CardDescription'>{description}</p>
    </li>
  )
}

export default Card
