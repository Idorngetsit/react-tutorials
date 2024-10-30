import { useState } from 'react'
import './footer.css'



const Footer = () => {

    const [userName, setUserName] = useState ('');
    const [userEmial, setUserEmail] = useState ('');
    const [userPhone, setUserPhone] = useState (0);
    const [selectedValue, setSelectedValue] = useState ('');
    const [selectedDays, setSelectedDays] = useState ([]);

    function handleDaysSelect(event) {

        const value = event.target.value;

        selectedDays((prev) => 

            event.target.checked ? [...prev, value] : prev.filter((day) => day !== value)

        );
        
        console.log(selectedDays);

    }

    return(
        <footer className="footer">
            <h2>Take A Coffee & Chat With Me</h2>
            <div className="mail-number">
             <div className="mail">
              <a href="mailto:udohamos02@gmail.com"
              ><i class="fas fa-envelope"></i><span>  Udohamos02@gmail.com</span></a>
             </div>
             <div className="number">
              <a href="tel:+2348026238104"
              ><i class="fa-solid fa-mobile"></i><span>  +2348026238104</span></a>
             </div>
            </div>
            <form action='mailto: udohamos02@gmail.com' method="post" enctype="text/plain">
              <input type='text' name='Name' id='Name' required placeholder='Your username' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
              <input type='email' name='email' id='email' required placeholder='email' value={userEmial}  onChange={(e)=>{setUserEmail(e.target.value)}}/>
              <input type='number' name='number' id='number' required placeholder='phone number' value={userPhone}  onChange={(e)=>{setUserPhone(e.target.value)}}/>
              <h3>Select Your Gender</h3>
              <div>
               <label htmlFor="">Male</label>
               <input type="radio" value={'male'} name='gender' id='gender1' onChange={(e)=> setSelectedValue(e.target.value)} checked={selectedValue === 'male'}/>              
              </div>
              <div>
               <label htmlFor="">Female</label>
               <input type="radio" value={'female'} name='gender' id='gender2' onChange={(e)=> setSelectedValue(e.target.value)} checked={selectedValue === 'female'}/>              
              </div>
              <div>
               <label htmlFor="">Custom</label>
               <input type="radio" value={'custom'} name='gender' id='gender3' onChange={(e)=> setSelectedValue(e.target.value)} checked={selectedValue === 'custom'}/>              
              </div>

              <br />
              {
               (selectedValue === 'custom') &&  (<textarea name="" id="" placeholder='Please type your gender'></textarea>)
              }
             
              <h3>Select day(s)</h3>
              <div>
               <label htmlFor="">Mon</label>
               <input type="checkbox" value={'Mon'} onChange={handleDaysSelect} />              
              </div>
              <div>
               <label htmlFor="">Tues</label>
               <input type="checkbox" value={'Tues'} onChange={handleDaysSelect} />              
              </div>
              <div>
               <label htmlFor="">Wed</label>
               <input type="checkbox" value={'Wed'} onChange={handleDaysSelect} />              
              </div>
              
              
              <textarea name="message" id="message" cols='50' rows='20' placeholder='Your message'></textarea>
              <button type='submit'>Send message</button>
            </form>

        </footer>
    

    );
};

export default Footer;