'use strict';
module.exports = o => {
	const keys = Object.keys(o)
					.map(key => typeof o[key] === 'undefined' ? key : '')
					.filter(key => key);

	return (keys.length > 0) ? keys : null;
};
