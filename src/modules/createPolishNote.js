import calculate from "./calculate";

const createPolishNote = parsedArr => {
	try {
		let elem = null, value = null;
		const tempArr = [], outArr = [];

		for (let i = 0; i < parsedArr.length; i++) {
			value = parsedArr[i];
			switch (value) {
			case '+':
			case '-':
				if (tempArr.length) {
					elem = tempArr.pop();
					while (elem && elem !== '(') {
						outArr.push(elem);
						elem = tempArr.pop();
					}
					(elem) && tempArr.push(elem);
				}
				tempArr.push(value);
				break;
			case '*':
			case '/':
				if (tempArr.length) {
					elem = tempArr.pop();
					while (elem && !['+', '-', '('].includes(elem)) {
						outArr.push(elem);
						elem = tempArr.pop();
					}
					(elem) && tempArr.push(elem);
				}
				tempArr.push(value);
				break;
			case '(':
				tempArr.push(value);
				break;
			case ')':
				elem = tempArr.pop();
				while (elem !== '(') {
					if (!elem) {
						throw 'Error: скобки';
					}
					outArr.push(elem);
					elem = tempArr.pop();
				}
				break;
			default:
				outArr.push(value);
			}
		}
		while (tempArr.length) {
			outArr.push(tempArr.pop());
		}
		return calculate(outArr);

	} catch (err) {
		console.warn(err);
		return (err);
	}
};
export default createPolishNote;
