import { useParams } from "react-router-dom";
export default function AnimalProfile({ animals, animalAssets }) {
  const { animalID } = useParams();
  const singleAnimal = animals.find((item) => item.fields.animalId == animalID);

  const singleAnimalAsset = animalAssets.find(
    (item) => item.sys.id == singleAnimal.fields.animalImage.sys.id
  );
  const animalImageUrl = "https:" + singleAnimalAsset.fields.file.url;

  return (
    <div className="animalProfile">
      <div className="animalImage">
        <img src={animalImageUrl} alt={singleAnimalAsset.fields.title} />
      </div>
      <div className="desc-profile">
        <div className="description">{singleAnimal.fields.description}</div>
        <div className="profile">
          <ul>
            <li>Breed:{singleAnimal.fields.breed}</li>
            <li>Age:{singleAnimal.fields.age}</li>
            <li>Gender:{singleAnimal.fields.gender}</li>
          </ul>
          <div className="tags-container">
            {singleAnimal.fields.tags.map((item) => {
              return <div className="animalTag">{item}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="interest-form">
        <form action="#">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label for="lastName">Last Name:</label>
          <input type="text" name= "lastName" id="lastName" />
          
          <label for="pets">Choose an animal:</label>
          <select name="pets" id="pets">
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
          
           
           

        </form>
      </div>
    </div>
  );
}
