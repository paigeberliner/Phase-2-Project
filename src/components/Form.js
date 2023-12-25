import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function Form({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newClass = {
      id: uuid(),
      name,
      image,
      description,
      location
    };
    onItemFormSubmit(newClass);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Image
        <input
          type="text"
          name="image" 
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Favorite Location
        <input
          type="text"
          name="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <button className="button" type="submit">Add to List</button>
    </form>
  );
}

export default Form;