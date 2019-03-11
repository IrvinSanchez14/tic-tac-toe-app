import React from 'react';
import PropTypes from "prop-types";

const DivGame  = (props) => {
        return (
            <div
                id={props.id} 
                className={props.className}  
                onClick={props.onClick}>
                <div
                    className={props.valuePlayer}
                >
                </div>
          </div>
        );
}

DivGame.propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    valuePlayer: PropTypes.string,
};
export default DivGame;