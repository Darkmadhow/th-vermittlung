import { useParams } from "react-router-dom";
import "./AnimalProfile.css";
import InterestForm from "../components/InterestForm";



export default function AnimalProfile({ animals, animalAssets }) {
  const { animalID } = useParams();
  const singleAnimal = animals.find((item) => item.fields.animalId == animalID);

  const singleAnimalAsset = animalAssets.find(
    (item) => item.sys.id == singleAnimal.fields.animalImage.sys.id
  );
  const animalImageUrl = "https:" + singleAnimalAsset.fields.file.url;

  return (
    <div className="animalProfile">
      <div className="animalImage" style={{
        backgroundImage: `url(${animalImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
       <div className="animImg"> <img src={animalImageUrl} alt={singleAnimalAsset.fields.title} /></div>
      </div>
      <div className="desc-profile">
        <div className="description">
          <h3>{singleAnimal.fields.name}</h3>
          {singleAnimal.fields.description}</div>
        <div className="profile">
          <h3>Profile</h3>
          <div className = "attribute-list">
          
          <table>
            <tbody>
            <tr><td>Name:</td><td>{singleAnimal.fields.name}</td></tr>
            <tr><td>Breed:</td><td>{singleAnimal.fields.breed}</td></tr>
            <tr><td>Age:</td><td>{singleAnimal.fields.age}</td></tr>
            <tr><td>Gender:</td><td>{singleAnimal.fields.gender}</td></tr>
            </tbody>
          </table>
          </div>
          <div className="tags-container">
            {singleAnimal.fields.tags ? singleAnimal.fields.tags.map((item) => {
              return <div className="animalTag"  key={item}>{item}</div>;
            }):""}
          </div>
        </div>
      </div>
      <InterestForm singleAnimal={singleAnimal} />
      
    </div>
  );
}
