import React from 'react';

const images = import.meta.glob('../assets/*.png', { eager: true });

const WineSelectRow = ({
  handleWineSelect,
  index,
  name,
  selected,
  bottle,
  subtypes,
}) => {
  return (
    <button
      className={selected ? `bottle-select selected` : `bottle-select`}
      value={index}
      onClick={handleWineSelect}
    >
      <img src={images[`../assets/${bottle}`]?.default} alt={`${name} bottle`} />
      <h3>{name}</h3>
      <p className='subtype-list'>{subtypes}</p>
    </button>
  );
};

export default WineSelectRow;
