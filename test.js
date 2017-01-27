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

	const user = {
		name: undefined,
		github: {
			username: 'brh55',
			repositories: {
				personal: 43,
				private: undefined
			},
			followers: {
				username: 'rightlag',
				repositories: {
					personal: 20,
					private: undefined
				},
				stars: 1
			},
			stars: 100
		},
		emoji: undefined
	}
	t.deepEqual(
		findUndefindness(user),
		[ "name", "github.repositories.private", "github.followers.repositories.private", "emoji" ]
	);
});
