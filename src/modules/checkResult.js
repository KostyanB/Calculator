//проверка и нормализация результата

const checkResult = result => {
	// нормализация до 12 знаков
	const normalizeResult = result => {
		const normRes = (result.match(/\d\.\d/)) ?
			result.substr(0, 12) :
			`${result.substr(0, 11)}Е`;
		return normRes;
	};
	// проверка длины
	const checkResLenght = result => {
		if (result.length > 12) {
			return normalizeResult(result);
		} else {
			return result;
		}
	};
	//проверка на NaN и деление на 0
	const checkNan = res => {
		if (res.match(/Infinity|NaN/)) {
			return ('Ошибка ввода');
		} else {
			return checkResLenght(res);
		}
	};

	return (checkNan(result));
};
export default checkResult;
