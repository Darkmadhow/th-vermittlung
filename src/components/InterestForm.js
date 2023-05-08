import "./InterestForm.css";
export default function InterestForm({singleAnimal}){
    return (
        <div className="interest-form">
            <h3> Interested in adopting a pet?</h3>
        <form action="#">
          <div className="input-name">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name= "lastName" id="lastName" />
          </div>
          <div className="animal-option">
          <label htmlFor="pets">Choose an animal:</label>
          <select name="pets" id="pets">
            {singleAnimal?<option>{singleAnimal.fields.name}</option>:null}
            
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="rabbit">Rabbit</option>
          </select>
          </div>
        <div className="input-contact">
          <label htmlFor="phoneNumber">Phone Number:</label>
           <input type="number" name="phoneNumber" id= "tel-number"/>
           <label htmlFor="eMail">E-Mail:</label>
           <input type="text" name="eMail" id ="email"/>
        </div>
            <div className="message-box">
          <label htmlFor="message" id="lm">Message:</label>
           <textarea type="text" name="message" id="input-message" cols="50" rows="10"></textarea>
           <div className="submit-button">
        <button  type = "submit" id="btn">Submit</button>
        </div>
        </div>
       
           
           

        </form>
      </div>
    
)}