import calcFn from "./calcFn";
import checkResult from "./checkResult";

const handleInputs = () => {
	const fieldsIncome = document.querySelector('.calc-fields__income'),
		fieldsButtons = document.querySelector('.calc-fields__buttons'),
		fieldResult = document.querySelector('.calc-fields__result');

	const resetCalc = () => {
		fieldsIncome.textContent = '';
		fieldResult.textContent = '0';
	};

	const addSymbol = val => {
		const newStr = fieldsIncome.textContent + val;
		fieldsIncome.textContent = newStr;
	};

	const showResult = () => {
		const result = calcFn(fieldsIncome.textContent);

		fieldResult.textContent = checkResult(result);
	};

	fieldsButtons.addEventListener('click', e => {
		(e.target.classList.contains('button-number') ||
            e.target.classList.contains('button-operator')) && addSymbol(e.target.dataset.sym);

		(e.target.classList.contains('button-reset')) && resetCalc();

		(e.target.classList.contains('button-result')) && showResult();
	});

};
export default handleInputs;
