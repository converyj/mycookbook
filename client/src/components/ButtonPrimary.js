import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ children, handleClick }) => {
	return (
		<button className="btn btn--pagination" onClick={handleClick}>
			{children}
		</button>
	);
};

ButtonPrimary.propTypes = {
	handleClick: PropTypes.func.isRequired,
	children: PropTypes.array.isRequired
};

export default ButtonPrimary;
