import test from 'ava';
import findUndefindness from '.';

test('Test find undefindness', t => {
	const cat = {
		name: undefined,
		breed: 'Persian',
		age: undefined
	};
	t.deepEqual(findUndefindness(cat), ['name', 'age']);

	const kitty = {
		name: 'Garfield',
		age: 24,
		breed: 'Tabby'
	};

	t.is(findUndefindness(kitty), null);
});
