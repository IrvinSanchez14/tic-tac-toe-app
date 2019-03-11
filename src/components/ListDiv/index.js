import React from 'react';
import PropTypes from "prop-types";

import DivGame from '../DivGame';

const ListDiv = (props) => {
  return (
    <div className="board">
      <DivGame
        id={0} 
        className={`square top left`} 
        valuePlayer={props.value[0]} 
        onClick={(event) => props.onClick(0)} 
      />
      <DivGame
        id={1} 
        className={'square top'} 
        valuePlayer={props.value[1]} 
        onClick={() => props.onClick(1)} 
      />
      <DivGame
        id={2} 
        className={'square top right'} 
        valuePlayer={props.value[2]} 
        onClick={() => props.onClick(2)} 
      />
      <DivGame
        id={3} 
        className={'square top left'} 
        valuePlayer={props.value[3]} 
        onClick={() => props.onClick(3)} 
      />
      <DivGame
        id={4} 
        className={'square top'} 
        valuePlayer={props.value[4]} 
        onClick={() => props.onClick(4)} 
      />
      <DivGame
        id={5} 
        className={'square top right'} 
        valuePlayer={props.value[5]} 
        onClick={() => props.onClick(5)} 
      />
      <DivGame
        id={6} 
        className={'square bottom left'} 
        valuePlayer={props.value[6]} 
        onClick={() => props.onClick(6)} 
      />
      <DivGame
        id={7} 
        className={'square bottom'} 
        valuePlayer={props.value[7]} 
        onClick={() => props.onClick(7)} 
      />
      <DivGame
        id={8} 
        className={'square bottom right'} 
        valuePlayer={props.value[8]} 
        onClick={() => props.onClick(8)} 
      />
    </div>
  );
}

ListDiv.propTypes = { 
  onClick: PropTypes.func,
  value: PropTypes.array,
}

    export default ListDiv;