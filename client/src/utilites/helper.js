export const whichObj = (state, from) => {
	return from === 'directions' && 'recipe';
};

export const getPropertyName = (from, arrType = 'all') => {
	return arrType + from.substring(0, 1).toUpperCase() + from.substring(1);
};

export const buildArr = (state, from, arrType = 'all') => {
	let arr = state;
	let propertyName;

	if (arrType === 'all') {
		propertyName = arrType + from.substring(0, 1).toUpperCase() + from.substring(1);

		arr = arr[propertyName];
	}
	else {
		propertyName = arrType + from.substring(0, 1).toUpperCase() + from.substring(1);

		arr = arr[propertyName];
	}

	return arr;
};

export const trancateTitle = (title, limit = 17) => {
	const newTitle = [];
	if (title.length > limit) {
		title.split(' ').reduce((acc, cur) => {
			// first word
			if (acc === 0 && cur.length > limit) {
				newTitle.push(cur.substring(0, limit - 1));
			}
			else if (acc + cur.length <= limit) {
				// next words
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);

		return `${newTitle.join(' ')}...`;
	}
	return title;
};
