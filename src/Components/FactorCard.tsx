import React, {FC} from 'react';
import { FoodSubtype } from '../types';

type Props = {
  object: FoodSubtype,
  index: number,
  handleRemove: Function,
  preps: string
}

const FactorCard: FC<Props> = ({object, index, handleRemove, preps}) => {
  return (
    <div className="factor" key={index}>
      <div className="factor-image-container">
        <img className="food-icon" src={require(`../assets/${object.iconUrl}.png`)} alt={object.iconUrl} />
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