import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    job: 'Software Developer',
    text: 'This is a fantastic product! I highly recommend it to everyone.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    job: 'Designer',
    text: 'I absolutely love using this! It has made my work so much easier.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    name: 'David Johnson',
    job: 'Product Manager',
    text: 'An amazing experience, truly a game changer in the industry.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

function Review() {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const randomReview = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * reviews.length);
    } while (randomIndex === index);
    setIndex(randomIndex);
  };

  const { name, job, text, image, id } = reviews[index];

  return (
    <div className="review">
      <h2 id={`author-${id}`} className="author">{name}</h2>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <img className="person-img" src={image} alt={name} />
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>Prev</button>
        <button className="next-btn" onClick={nextReview}>Next</button>
        <button className="random-btn" onClick={randomReview}>Surprise Me</button>
      </div>
    </div>
  );
}

export default Review;
