import {useParams} from "react-router-dom";
export default function AnimalProfile({items,assets}){
    const {animalID} = useParams();
   const singleAnimal= items.find((item)=>item.fields.animalId=== animalID);
}