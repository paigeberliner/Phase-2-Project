import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import Form from "./Form";
import WorkoutClassContainer from "./ClassList";

function App() {
  const [workoutClasses, setWorkoutClasses] = useState([]);
  const [newClass, setNewClass] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/WorkoutClass")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWorkoutClasses(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function onItemFormSubmit(classObj) {
    setNewClass([...newClass, classObj]);

    fetch("http://localhost:3000/WorkoutClass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(classObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWorkoutClasses([...workoutClasses, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  return (
    <div>
      <NavBar />
      <Title />
      <Form onItemFormSubmit={onItemFormSubmit}/>
      {workoutClasses.map(workoutClass => (
        <WorkoutClassContainer name={workoutClass.name} image={workoutClass.image} key={workoutClass.id}/>
        ))}
    </div>
  );
}

export default App;