import React, {useEffect, useState} from 'react'
import BlockChain from '../ServiceProjects/Blockchain/Blockchain';
import WebDev from '../ServiceProjects/WebDev/WebDev';
import Design from '../ServiceProjects/Design/Design';
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

  let next;
  if(services === '1') {
    next = <WebDev />
  } else if(services === '2') {
    next = <BlockChain />
  } else{
    next = <Design />
  }
  
  return (



    <div>
      
    {/* <small>The parameter is</small> <strong>{services}</strong> */}


    {/*     
    {(services === 'blockchain development') && (<div>Block chain code</div>)}
    {(services === 'web development') && (<div>Block chain code</div>)}
    {(services === 'ui/ux') && (<div>Block chain code</div>)} */}

    {serviceDetail && serviceDetail?.name}

    { next }
    

    </div>
  )
}

export default ServicesDetails