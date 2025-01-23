import { v4 } from "uuid";


import "./styles.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { animalsData } from "./data";

function Lesson05() {
  // с помощью map, на основе данных создаем массив готовых элементов
  // для их отображения на экране

  const animalCards = animalsData.map((animal) => {
    return (
      
      <div key={v4()}>
       
        <h1>Madagascar</h1>
      <AnimalCard
    //   ключ - дополнительный атрибут, который требуется при работе с массивом элементов,
    //  который мы получаем при работе с map. Он требуется для оптимизации работы react  
    // и должен быть уникальным
       // key={animal.Date.id}  добавляем уникальный ключ для каждого элемента

       
        animalName={animal.name}
        animalSpecies={animal.species}
        animalImg={animal.image}
      >
        <div>Role: {animal.role}</div>
        <div>Skills: {animal.skills.join(", ")}</div>
      </AnimalCard></div>
    );
  });

  return (
    <div className="lesson05-wrapper">
      {animalCards}
    </div>
    
  );
}

export default Lesson05;

