import React from 'react';

const FactorCard = ({object, index, handleRemove, preps}) => {
    console.log('object', object)
    return (
            <div className="factor" key={index}>
              <div className="factor-image-container">
                <img className="food-icon" src={require(`../assets/${object.iconUrl}.png`)} alt={object.iconUrl} />
              </div>
              <div className="factor-center">
              <h3>{object.name}</h3>
              <ul>
                {preps.indexOf(object.name) < 0
                  ? object.subtypes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : ""}
              </ul>
              </div>
              <button className="remove-ingredient" name={index} onClick={handleRemove}>X</button>
            </div>
    );
};

export default FactorCard;