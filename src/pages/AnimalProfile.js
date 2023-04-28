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
      <div className="description">{singleAnimal.fields.description}</div>
      <div className="profile">
        <ul>
          <li>Breed:{singleAnimal.fields.breed}</li>
          <li>Age:{singleAnimal.fields.age}</li>
          <li>Gender:{singleAnimal.fields.gender}</li>
        </ul>
        <div className="tags-container">
        {singleAnimal.fields.tags.map((item)=>{
            return(
                <div className="animalTag">{item}</div>
            )
        })}
        </div>
      </div>
    </div>
  );
}
