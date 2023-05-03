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
          <button className="btns">
            <img
              src={hund}
              alt="dog"
              className="category-btn "
              onClick={() => handleFilter("Dog")}
            ></img>
            Dogs
          </button>

          <button className="btns">
            <img
              src={katze}
              alt="cat"
              className="category-btn "
              onClick={() => handleFilter("Cat")}
            ></img>
            Cats
          </button>

          <button className="btns">
            <img
              src={kaninchen}
              alt="bunny"
              className="category-btn "
              onClick={() => handleFilter("Rodent")}
            ></img>
            Rodents
          </button>

          <button className="btns">
            <img
              src={papagei}
              alt="papagei"
              className="category-btn "
              onClick={() => handleFilter("Bird")}
            ></img>
            Birds
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
