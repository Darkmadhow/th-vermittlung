import {useParams} from "react-router-dom";
export default function AnimalProfile({animals,animalAssets}){
    const {animalID} = useParams();
    
   const singleAnimal= animals.find((item)=>item.fields.animalId=== animalID);
    const singleAnimalAsset = animalAssets.find((item)=>item.sys.id===singleAnimal.fields.animalImage.sys.id);
    const animalImageUrl ="https"+ singleAnimalAsset.fields.file.url;


    return(
     <div className ="animalProfile">
        <div className= "animalImage">
            <img src={animalImageUrl} alt={singleAnimal.Asset.fields.title} />
        </div>
        <div className= "description">
            {singleAnimal.Asset.fields.description}
        </div>
        <div className="profile">
            <ul>
                <li>Breed:</li>
                <li>Age:</li>
                <li>Gender:</li>
             </ul>
        </div>
    </div>



    )






}