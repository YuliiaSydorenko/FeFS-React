import React, { useState } from 'react';
import Button from '../Button/Button';
import './styles.css';

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-buttons">
        <div className="like-button">
          <img src="/src/assets/Like.jpg" alt="Like" className="icon" />
          <span>{likes}</span>
          <Button name="Like" type="button" onClick={handleLike} />
        </div>
        <div className="dislike-button">
          <Button name="Dislike" type="button" onClick={handleDislike} />
          <span>{dislikes}</span>
          <img src="/src/assets/down.jpg" alt="Dislike" className="icon" />
        </div>
        <div className="reset-button">
          <Button name="Reset Results" type="button" onClick={resetResults} />
        </div>
      </div>
    </div>
  );
}

export default Feedback;


