import {useEffect, useState} from 'react'
import './services.css'
import ServiceCard from './component/ServiceCard';
import { Link } from 'react-router-dom';
import Axios from 'axios';


const Services = () => {

  const [services, setServices] = useState([])


  const fetchServices = async () => {

    try {
     const response =await Axios({
       method: 'get',
       url: 'http://localhost:8000/services',
     });
  
     console.log('the fetch services data', response.data);

     setServices(response.data);
  
    } catch (error) {
     console.error('this is fetch services error >>>', error)
     
    }
   }
  useEffect(() => { fetchServices() 

  }, [])


  useEffect(() =>  {
      console.log('the fetch services data', services)
    }, [services])
  return (
    <div className='services'>
     
      {
        services && services?.map(service => (
        <Link to={`/services/${service?.name}`}>
        <ServiceCard title= {service?.name} image={service?.image} desc={service?.desc}/>
        </Link>
        ))

      }

    </div>
  )
}

export default Services