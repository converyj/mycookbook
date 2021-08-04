import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ children, handleClick, styles }) => {
	return (
		<button className={`btn btn--pagination ${styles}`} onClick={handleClick}>
			{children}
		</button>
	);
};

ButtonPrimary.propTypes = {
	handleClick: PropTypes.func.isRequired,
	children: PropTypes.array.isRequired
};

export default ButtonPrimary;
