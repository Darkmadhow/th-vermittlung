
export default function InterestForm({singleAnimal}){
    return (
        <div className="interest-form">
        <form action="#">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label for="lastName">Last Name:</label>
          <input type="text" name= "lastName" id="lastName" />
          
          <label for="pets">Choose an animal:</label>
          <select name="pets" id="pets">
            {singleAnimal?<option>{singleAnimal.fields.name}</option>:null}
            
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="rabbit">Rabbit</option>
          </select>

          <label for="phoneNumber">Phone Number:</label>
           <input type="number" name="phoneNumber"/>
           <label for="eMail">E-Mail:</label>
           <input type="text" name="eMail"/>

          <label for="message">Message:</label>
           <textarea type="text" name="message"></textarea>
          <button name = "submit"></button>
           
           

        </form>
      </div>
    
)}