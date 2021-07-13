import React from 'react';

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
      <img src={require(`../assets/${bottle}`)} alt={`${name} bottle`} />
      <h3>{name}</h3>
      <p className='subtype-list'>{subtypes}</p>
    </button>
  );
};

export default WineSelectRow;
