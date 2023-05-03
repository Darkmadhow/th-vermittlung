import { Link } from "react-router-dom";
import "./AnimalCard.css";

export default function AnimalCard({ singleAnimal, animalPicture }) {
  function getGenderIcon(gender) {
    if (gender === "male") return "fa fa-mars";
    else return "fa fa-venus";
  }

  return (
    <div className="animalCard">
      <Link to={`../animalprofile/${singleAnimal.fields.animalId}`}>
        <div className="animalImageContainer">
          <img
            src={"https:" + animalPicture.fields.file.url}
            alt={animalPicture.fields.title}
          />
        </div>
        <div className="cardText">
          <div className="cardHead">
            <h3>{singleAnimal.fields.name}</h3>
          </div>
          <div className="cardBody">
            <span>{`Age: ${singleAnimal.fields.age} years`}</span>
            <span className={getGenderIcon(singleAnimal.fields.gender)}></span>
          </div>
        </div>
      </Link>
    </div>
  );
}
