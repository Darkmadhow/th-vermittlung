import "./AnimalCard.css"

export default function AnimalCard({ singleAnimal, animalPicture }) {
  function getGenderIcon(gender) {
    if (gender === "male") return "fa fa-mars";
    else return "fa fa-venus";
  }

  return (
    <div className="animalCard">
      <div className="animalImageContainer">
        <img
          src={animalPicture.fields.file.url}
          alt={animalPicture.fields.title}
        />
      </div>
      <div className="cardText">
        <div>
          <span>{singleAnimal.fields.name}</span>
          <span className={getGenderIcon(singleAnimal.fields.gender)}></span>
        </div>
        <span>{`${singleAnimal.fields.age} years old`}</span>
      </div>
    </div>
  );
}
