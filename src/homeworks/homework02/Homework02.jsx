import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './styles.css';

function Homework02() {
  return (
    <div className="homework02-wrapper">
      <ProfileCard

        avatar="https://images.unsplash.com/photo-1736404546691-f4c225e7a3f7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Sofiia Kur"
        occupation="Software Engineer"
        hobbies="Ballet, Hiking, Coding"
      />
      <ProfileCard
        avatar="https://plus.unsplash.com/premium_photo-1736600242460-6987480263c8?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
        name="Leo Kur"
        occupation="Graphic Designer"
        hobbies="Drawing, Traveling, Photography"
      />
      <ProfileCard
        avatar="https://images.unsplash.com/photo-1735812030252-2e292cdb4d7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Alice Kolis"
        occupation="Product Manager"
        hobbies="Cooking, Yoga, Blogging"
      />
    </div>
  );
}

export default Homework02;
