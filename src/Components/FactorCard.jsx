import React from 'react';

const images = import.meta.glob('../assets/*.png', { eager: true });

const FactorCard = ({object, index, handleRemove, preps}) => {
    const imgSrc = images[`../assets/${object.iconUrl}.png`]?.default;
    return (
            <div className="factor" key={index}>
              <div className="factor-image-container">
                <img className="food-icon" src={imgSrc} alt={object.iconUrl} />
              </div>
              <div className="factor-center">
              <h3>{object.name}</h3>
              <p>
                {preps.indexOf(object.name) < 0
                  ? object.subtypes.map((item, index) => {
                    if (object.subtypes.length - 1 === index) {
                      return item;
                    } else { 
                      return `${item}, `;
                    }
                  })
                  : ""}
              </p>
              </div>
              <button className="remove-ingredient" name={index} onClick={handleRemove}>X</button>
            </div>
    );
};

export default FactorCard;