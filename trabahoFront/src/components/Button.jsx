import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick, width, height }) => {
   const buttonStyle = {
      width: width,
      height: height,
   };

   return (
      <button
         className="border-solid font-bold h-10 text-white border-2 bg-emeraude rounded-md hover:bg-jade"
         style={buttonStyle} // Apply dynamic width using inline style
         onClick={onClick}
      >
         {name}
      </button>
   );
};

Button.propTypes = {
   name: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   width: PropTypes.string.isRequired,
   height: PropTypes.string.isRequired,
};

export default Button;
