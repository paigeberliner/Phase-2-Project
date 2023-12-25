import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"

function About() {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/WorkoutClass")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDescription(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h2 className="Title"> Class Descriptions </h2>
      <ul>
        {description.map(x => (
          <li className="description" key={x.id}>{x.name} - {x.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;