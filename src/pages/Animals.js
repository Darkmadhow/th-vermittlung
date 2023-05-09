import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import "./Animals.css";
import hund from "../icons/hund.png";
import katze from "../icons/katze.png";
import kaninchen from "../icons/kaninchen.png";
import papagei from "../icons/papagei.png";

export default function Animals({ animals, animalAssets }) {
  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  // console.log("animals in animals", animals);
  // console.log("filteredAnimals", filteredAnimals);

  function handleFilter(value) {
    const results =
      animals.length &&
      animals.filter((animal) => {
        return animal.fields.category === value;
      });
    // console.log("results", results);
    setFilteredAnimals(results);
  }

  return (
    <div>
      <div className="menu-container">
        <div className="btn-container">
          <button
            className="btn-all"
            onClick={() => setFilteredAnimals(animals)}
          >
            All animals
          </button>
          <button className="btns" onClick={() => handleFilter("Dog")}>
            <img src={hund} alt="dog" className="category-btn "></img>
            <p className="category-name">Dogs</p>
          </button>

          <button className="btns" onClick={() => handleFilter("Cat")}>
            <img src={katze} alt="cat" className="category-btn "></img>
            <p className="category-name">Cats</p>
          </button>

          <button className="btns" onClick={() => handleFilter("Rodent")}>
            <img src={kaninchen} alt="bunny" className="category-btn "></img>
            <p className="category-name"> Rodents</p>
          </button>

          <button className="btns" onClick={() => handleFilter("Bird")}>
            <img src={papagei} alt="papagei" className="category-btn"></img>
            <p className="category-name">Birds</p>
          </button>
        </div>
        <div className="animal-cards">
          {filteredAnimals.length
            ? filteredAnimals.map((item) => {
                const singleAnimalAsset = animalAssets.find(
                  (asset) => asset.sys.id === item.fields.animalImage.sys.id
                );
                return (
                  <AnimalCard
                    singleAnimal={item}
                    animalPicture={singleAnimalAsset}
                    key={singleAnimalAsset.sys.id}
                  />
                );
              })
            : " ...loading"}
        </div>
      </div>
    </div>
  );
}
