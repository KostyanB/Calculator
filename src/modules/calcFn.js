import { actions } from "./calcActions";

const calcFn = expr => {

	// получаем кусок строки число-операнд-число
	const parseExpr = (str, action) => {
		// ищем операнд с числами по бокам
		const reg = new RegExp((`(\\d*\\.*\\d*)\\s*\\${action.value}\\s*(\\d*\\.*\\d*)`));
		const out = str.match(reg);
		// получаем ["3.2+6", "3.2", "6", index: 0, input: "3.2+6", groups: undefined]
		if (!out) return false;

		const result = {
			str: out[0]
		};

		result.value = action.fn(out[1], out[2]);
		return result;
	};
	// вычисляем результат по кускам
	const calcExpr = str => {
		let res;
		// перебираем операции * / + -
		Object.keys(actions).map(type => {
			res = parseExpr(str, actions[type]);
			if (res) { // заменяем кусок строки
				str = str.replace(res.str, res.value.toString());
				str = calcExpr(str);
			}
		});
		return str;
	};

	return (calcExpr(expr));
};
export default calcFn;
