//* нормализация дробей с e-... (очень малых)
const normalizeFraction = val => {

	if (val.includes('e-')) {
		const indexE = val.indexOf('e-');
		//* сдвиг запятой при "число...e-..."
		const correctCount = +val.slice(indexE + 2) - 1;
		let correctVal = val.substring(0, indexE);
		if (correctVal.includes('.')) correctVal = correctVal.replace('.', '');
		//* начало строки коррекции 0.->нули коррекции->строка с извлеченным 0
		//* и всё режем на 12 знаков после запятой
		const newVal = `0.${'0'.repeat(correctCount)}${correctVal}`.substr(0, 13);
		return newVal;
	} else {
		return val.substr(0, 13);
	}
};
export default normalizeFraction;
