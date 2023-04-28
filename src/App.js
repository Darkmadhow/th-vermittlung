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
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimals();
  }, []);
  console.log("animals state", animals);

  function getAnimals() {
    let url =
      "https://cdn.contentful.com/spaces/3buz4oreveso/environments/master/entries?access_token=qRdu9vWWuio9t0XRmoN1e_cOEZDItF9_ePajyzX0o_E";

    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`Couldn't load animals: ${response.status}`);
        else return response.json();
      })
      .then((data) => {
        setAnimals(data.items);
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="animals" element={<Animals />} />
        <Route path="animalprofile/:animalID" element={<AnimalProfile />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
