import calcButtons from "./calcButtons";

const drawButtons = () => {
    const fieldsButtons = document.querySelector('.calc-fields__buttons');

    const list = calcButtons.reduce((html, { type, id, sym, text }) => html +
        `<button class="calc-fields__buttons_button button-${type}" id="btn-${id}" data-sym="${sym}">${text}</button>`
    ,'');
    fieldsButtons.innerHTML = list;

};
export default drawButtons;