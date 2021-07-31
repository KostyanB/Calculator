// арифметические действия

export const actions = {
	multipl: {
		value: '*',
		fn: (a, b) => (a * b)
	},
	divide: {
		value: '/',
		fn: (a, b) => (a / b)
	},
	addit: {
		value: '+',
		fn: (a, b) => (+a + +b)
	},
	subtr: {
		value: '-',
		fn: (a, b) => (a - b)
	}
};
