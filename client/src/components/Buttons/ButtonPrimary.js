import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ children, handleClick, styles }) => {
	return (
		<button className={`btn ${styles}`} onClick={handleClick}>
			{children}
		</button>
	);
};

ButtonPrimary.propTypes = {
	children: PropTypes.array.isRequired
};

export default ButtonPrimary;
