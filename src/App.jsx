import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css';
import Context from "./Context/Context";
import RootLayout from "./layout/RootLayout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ServicesDetails from "./Components/Services/ServicesDetails";
import ServicesLayout from "./layout/ServicesLayout";


function App() {

  const routes = createRoutesFromElements (

    <Route path="/" element= { <RootLayout/> } >

      <Route index element= { <Home/> } />

      <Route path="about" element={<About/>}/>

      <Route path="contact" element={<Contact/>}/>

      <Route path="services" element={<ServicesLayout/>}>

        <Route path=":services" element={<ServicesDetails/>}></Route>

      </Route>

      <Route/>

    </Route>
  );

  const router = createBrowserRouter(routes);

  return (

    <Context>

      <RouterProvider router={router}>
      
      </RouterProvider>

    </Context>
    
  )
}

export default App
