import React from "react";
import Class from "./Class";


function WorkoutClassContainer({ name, image }){


const displayList = { name, image };
  return (
    <div>
        <Class key={name} name={name} image={image} />
    </div>
  );
}

export default WorkoutClassContainer;