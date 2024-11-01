import '../servicedetails.css';
import ProCards from "../Project cards/ProCards";


const Design = () => {
  return (
    <>
      <h1>Web Design</h1>
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
        vitae aliquam magnam facere? Facere quas harum natus cum. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Veritatis maxime eum
        reprehenderit explicabo repellat dolor quod recusandae voluptate.
        Aperiam, excepturi?
      </p>
      <div className="projects">
        <ProCards num={1} />
        <ProCards num={2} />
        <ProCards num={3} />
      </div>
    </>
  );
};

export default Design;