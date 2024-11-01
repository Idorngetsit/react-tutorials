import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';


const ServicesDetails = () => {

  const {services} = useParams()
  const [serviceDetail, setserviceDetail] = useState([])

  const fetchServicesDetails = async () => {

    try {
      const response = await Axios ({

        method: 'get',
        url: `http://localhost:8000/services/${services}`

      })

      setServiceDetail(response.data)

      console.log(serviceDetail)

    } catch (error) {

    }
  }
  useEffect( () => {

    fetchServicesDetails()
  })


  
  return (
    <div><small>The parameter is</small> <strong>{services}</strong>
{/*     
    {(services === 'blockchain development') && (<div>Block chain code</div>)}
    {(services === 'web development') && (<div>Block chain code</div>)}
    {(services === 'ui/ux') && (<div>Block chain code</div>)} */}

    {serviceDetail && serviceDetail?.name}

    </div>
  )
}

export default ServicesDetails