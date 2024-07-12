import './InputScreen.css'

function InputScreen({inputValue, totalValue}) {
    return (
        <div className="calculator__inputs">
            <input value={inputValue} className="calculator__input" readOnly/>
            <div className="calculator__total">{totalValue}</div>
            <hr className="calculator__line"/>
        </div>
    );
}

export default InputScreen;