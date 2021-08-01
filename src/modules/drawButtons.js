import calcButtons from "./calcButtons";

const drawButtons = () => {
    const fieldsButtons = document.querySelector('.calc-fields__buttons');

    const calcBtn = document.createElement('button');
    calcBtn.className = 'calc-fields__buttons_button';

    calcButtons.forEach(item => {
        const { type, id, sym, text } = item;
        const btn = calcBtn.cloneNode(true);
        btn.classList.add(`button-${type}`);
        btn.setAttribute('id', `btn-${id}`);
        btn.setAttribute('data-sym', sym);
        btn.innerHTML = `${text}`;
        fieldsButtons.append(btn);
    });

};
export default drawButtons;