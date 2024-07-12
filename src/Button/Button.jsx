import './Button.css'

function Button({value, onClickFunction}) {
    return (
        <button className={`calculator__btn ${value==='=' ? 'calculator__btn_equals' : ''}`} type="button" onClick={() => onClickFunction(value)}>{value}</button>
    );
}

export default Button;