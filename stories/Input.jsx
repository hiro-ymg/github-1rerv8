import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ backgroundColor, size, ...props }) => {
  return (
    <input style={{ backgroundColor: backgroundColor }} {...props}></input>
  );
};

Input.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Input.defaultProps = {
  backgroundColor: null,
  size: 'medium',
};
