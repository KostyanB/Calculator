import normalizeFraction from "./normalizeFraction";
//* проверка и нормализация результата

const normalizeResult = result => {
	//* проверка на меньше экрана 12 символов
	const checkMinimalNum = val => ((parseFloat(val) === 0) ? 'Е-00' : val);

	if (typeof result === "number") {
		let normRes = String(result);

		if (result >= 1000000000000) {
			return (`${normRes.substr(0, 11)}Е`);
		} else if (normRes.match(/\d\.\d/) && normRes.length > 13) {
			const newRes = normalizeFraction(normRes);
			return checkMinimalNum(newRes);
		} else {
			return result;
		}
	} else {
		return result;
	}
};
export default normalizeResult;