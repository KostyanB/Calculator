
const calculate = polishNoteArr => {
	try {
		let prevNum, nextNum, value = null;
		const tempArr = [];

		for (let i = 0; i < polishNoteArr.length; i++) {
			value = polishNoteArr[i];
			switch (value) {
			case '+':
				nextNum = tempArr.pop();
				prevNum = tempArr.pop();
				tempArr.push(prevNum + nextNum);
				break;
			case '-':
				nextNum = tempArr.pop();
				prevNum = tempArr.pop();
				tempArr.push(prevNum - nextNum);
				break;
			case '*':
				nextNum = tempArr.pop();
				prevNum = tempArr.pop();
				tempArr.push(prevNum * nextNum);
				break;
			case '/':
				nextNum = tempArr.pop();
				prevNum = tempArr.pop();
				const res = prevNum / nextNum;
				if (res === Infinity) {
					throw 'На 0 не делят';
				} else {
					tempArr.push(res);
				}
				break;
			default:
				tempArr.push(parseFloat(value));
			}
		}

		if (Number.isNaN(tempArr[0])) {
			throw 'Ошибка ввода';
		} else {
			return tempArr[0];
		}

	} catch (err) {
		console.warn(err);
		return (err);
	}
};
export default calculate;
