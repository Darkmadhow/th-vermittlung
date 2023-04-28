import { useState } from "react";

export default function Animals({ animals, animalAssets }) {
  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  console.log("animals in animals", animals);
  console.log("filteredAnimals", filteredAnimals);

  function handleFilter(value) {
    const results =
      animals.length &&
      animals.filter((animal) => {
        return animal.fields.category === value;
      });
    console.log("results", results);
    setFilteredAnimals(results);
  }

  return (
    <div>
      <div>
        <button className="cat-btn" onClick={() => setFilteredAnimals(animals)}>
          All
        </button>
        <button className="cat-btn" onClick={() => handleFilter("Dog")}>
          Dog
        </button>
        <button className="cat-btn" onClick={() => handleFilter("Cat")}>
          Cat
        </button>
        <button className="cat-btn" onClick={() => handleFilter("Rodent")}>
          Rodent
        </button>
        <button className="cat-btn" onClick={() => handleFilter("Bird")}>
          Bird
        </button>
        {filteredAnimals.length
          ? filteredAnimals.map((item) => {
              return (
                <li className="animal-card">
                  <img src={item.fields.animalImage.sys} alt="name" />
                  <h3>{item.fields.name}</h3>
                  <p> {item.fields.age} </p>
                  <p> {item.fields.gender} </p>
                </li>
              );
            })
          : " ...loading"}
      </div>
    </div>
  );
}
