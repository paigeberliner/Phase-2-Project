import React from 'react';

function Class({ name, image }){

    return (
    <div className="classTile">
        <h2>{name}</h2>
        <img className="classImage" src={image} alt={name} />
    </div>
    )
}

export default Class