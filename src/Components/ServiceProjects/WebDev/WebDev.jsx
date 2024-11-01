import '../serviceprojects.css'
import Projects from '../Projects/Project';


const WebDev = () => {

    return (
       <>
         <h1>Web Development</h1>
         <div className="Topic">
           <img src="../../../../src/assets/reactpic.png" />
         </div>
         <p className="topic-desc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni
           odit consectetur error pariatur quae optio cumque, labore quam doloribus
           iure, temporibus officia? Tenetur, cumque! Quasi eveniet temporibus
           rerum saepe, omnis repellendus. Facilis, obcaecati eius. Optio sit
           fugiat laborum quas est nesciunt reiciendis voluptatem similique?
           Nostrum voluptas veritatis ea tempora excepturi, optio suscipit facere
           repellendus sit reiciendis molestiae voluptatem illo sint eum nesciunt
           aspernatur cumque atque magni enim animi libero corrupti. Temporibus
           quidem soluta magni ad natus quasi ipsum modi? Eveniet iste quaerat
           aliquid earum minus consectetur doloremque excepturi asperiores aut,
           vitae aliquam magnam facere? Facere quas harum natus cum.
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime eum reprehenderit
           explicabo repellat dolor quod recusandae voluptate. Aperiam, excepturi?
         </p>

         <h1>Projects</h1>

         <div className="projects">
           <Projects num={ 1 } />
           <Projects num={ 2 } />
           <Projects num={ 3 } />
         </div>
       </>
     );
   }
   
   export default WebDev