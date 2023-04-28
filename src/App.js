import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Animals from "./pages/Animals";
import AnimalProfile from "./pages/AnimalProfile";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

function App() {
  const [animals, setAnimals] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAnimals();
  }, []);

  async function getAnimals() {
    let url = `https://cdn.contentful.com/spaces/3buz4oreveso/environments/master/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;

    setIsLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();
      setAnimals(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <div className="App">
      <Header />
      {!isLoading ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="animals"
            element={
              <Animals
                animals={animals.items}
                animalAssets={animals.includes.Asset}
              />
            }
          />
          <Route
            path="animalprofile/:animalID"
            element={
              <AnimalProfile
                animals={animals.items}
                animalAssets={animals.includes.Asset}
              />
            }
          />
          <Route path="contact" element={<Contact />} />
        </Routes>
      ) : (
        "Loading page, please wait..."
      )}
      <Footer />
    </div>
  );
}

export default App;
