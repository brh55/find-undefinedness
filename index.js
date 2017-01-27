'use strict';
module.exports = o => {
	const keys = findUndefinedness(o);
	return (keys === null) ? keys : keys.split(',');
};

var findUndefinedness = (o, prop) => {
	const keys = Object.keys(o)
					.map(key => {
						// Indicates current position accounting
						// for nested positioning
						const current = (prop) ? `${prop}.${key}` : key;
						if (typeof o[key] === 'object') {
							return findUndefinedness(o[key], current);
						}
						if (typeof o[key] === 'undefined') {
							return current;
						}
						return '';
					})
					.filter(key => key)
					.toString();

	return (keys.length > 0) ? keys : null;
}

