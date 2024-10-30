import React from 'react'
import { useParams } from 'react-router-dom';
const ServicesDetails = () => {
  const {services} = useParams()

  
  return (
    <div><small>The parameter is</small> <strong>{services}</strong>
    
    {(services === 'blockchain development') && (<div>Block chain code</div>)}
    {(services === 'web development') && (<div>Block chain code</div>)}
    {(services === 'ui/ux') && (<div>Block chain code</div>)}
    </div>
  )
}

export default ServicesDetails