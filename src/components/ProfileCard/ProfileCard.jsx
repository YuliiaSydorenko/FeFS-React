import "./styles.css";
import { userData } from "./data";
import userAvatar from "../../assets/avatar.jpg";

function ProfileCard() {
  //достать из объекта userData все свойства и сохранить их в отдельные переменные
  
  const { name, avatar, profession, hobby } = userData;
  return (
    <div className="profile-card-wrapper">
      <h3>{name}</h3>
      {/* 1 вариант работы с картинкой - абсолютный путь */}
      {/* <img src={userData.avatar} className="card-img" alt='avatar image'/> */}
      {/* 2 вариант работы с картинкой - относительный путь (из папки проекта) */}
      <img src={userAvatar} className="card-img" alt="avatar image" />
      <div>{profession}</div>
      <div>{hobby}</div>
    </div>
  );
}

export default ProfileCard;
