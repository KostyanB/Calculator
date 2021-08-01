import createPolishNote from "./createPolishNote";
// парсим исходную строку в массив
const parseInitStr = initStr => {
	initStr = initStr.replace(/\s+/g, '');

	let elem = '', prevElem = '', value = '';
	const resArr = [];

	for (let i = 0; i < initStr.length; i++) {
		value = initStr[i];
		switch (value) {
		case '+':
		case '*':
		case '/':
		case '(':
		case ')':
			if (elem) {
				resArr.push(elem);
				elem = '';
			}
			resArr.push(value);
			break;
		case '-':
			if (elem) {
				resArr.push(elem);
				elem = '';
				resArr.push(value);
			} else {
				if (i === 0 || ['+', '-', '*', '/', '('].includes(prevElem)) {
					elem = value;
				} else {
					resArr.push(value);
				}
			}
			break;
		default:
			elem += value;
		}
		prevElem = value;
	}

	(elem) && resArr.push(elem);

	return createPolishNote(resArr);
};
export default parseInitStr;