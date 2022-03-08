import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Grocery aisle',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Grocery booth',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'building exterior',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'table at a restaurant',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'The inside of a cafe',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'cat with bright green eyes',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'green parrot with yellow facial markings',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'yellow and green macaww',
    },
    {
      name: 'French bulldog smile',
      category: 'portraits',
      description: 'french bulldog smiling',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'pancakes',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'burrito',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'pasta with scallops',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'cheese burger',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'bowl full of fruit',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'sea-side village',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'suburban home',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'park bench',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const toggleModal = (image, i) => {
    // current photo
  }
  return (
    <div>
      <Modal />
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
          src={require(`../../assets/small/${category}/${i}.jpg`)}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
        />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;