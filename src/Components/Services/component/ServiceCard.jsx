import React from 'react'
import serviceimg from '../../../assets/reactpic.png'

const ServiceCard = ({image, title, desc}) => {
  return (
    
    <div className='services-card'>
        <div>
            <img src={serviceimg}/>
        </div>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default ServiceCard