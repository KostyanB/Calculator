import normalizeResult from "./normalizeResult";
import parseInitStr from "./parseInitStr";

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

	let mark = true;
	const toggleBracket = () => {
		(mark) ? addSymbol('(') : addSymbol(')');
		mark = !mark
	};

	const delSymbol = () => {
		const newStr = fieldsIncome.textContent;
		fieldsIncome.textContent = newStr.substring(0, newStr.length - 1);
	};

	const getResult = () => {
		const initStr = (fieldsIncome.textContent || '0').toLowerCase();
		const result = (initStr) && parseInitStr(initStr);
		fieldResult.textContent = normalizeResult(result);
	};

	// *ввод с экрана
	fieldsButtons.addEventListener('click', e => {
		const target = e.target;
		//*добавить символы
		target.classList.contains('button-number') && addSymbol(target.dataset.sym);
        target.classList.contains('button-operand') && addSymbol(target.dataset.sym);
		target.matches('#btn-point') && addSymbol('.');
		target.matches('#btn-bracket') && toggleBracket();
		//*управление
		target.matches('#btn-del') && delSymbol();
		target.matches('#btn-reset') && resetCalc();
		target.matches('#btn-result') && getResult();
	});
	//* ввод с клавиатуры
	addEventListener('keyup', e => {
		//*добавить символы
		(e.key >= '0' && e.key <= '9') && addSymbol(e.key);
		['+', '-', '*', '/', '(', ')'].includes(e.key) && addSymbol(e.key);
		['.', ','].includes(e.key) && addSymbol('.');
		// ['(', ')'].includes(e.key) && toggleBracket()
		//*управление
		['Backspace', 'Delete'].includes(e.code) && delSymbol();
		['Escape'].includes(e.code) && resetCalc();
		['Enter', 'NumpadEnter', 'Equal'].includes(e.code) && getResult();
	});
};
export default handleInputs;
