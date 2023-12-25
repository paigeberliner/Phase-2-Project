import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"

function About() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/WorkoutClass")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLocation(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h2 className="Title"> Favorite Location </h2>
      <ul>
        {location.map(x => (
          <li className="description" key={x.id}>{x.name} - {x.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;