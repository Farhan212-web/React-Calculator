import '../css/ButtonList.css';

const ButtonList = (props) => {

    const handleNumClick = (evt) => {
        props.buttonClick(evt.currentTarget.textContent);
    }

    return (
        <div className="buttons-grid">
            <button onClick={handleNumClick} className='standard-btn'>7</button>
            <button onClick={handleNumClick} className='standard-btn'>8</button>
            <button onClick={handleNumClick} className='standard-btn'>9</button>
            <button>DEL</button>
            <button onClick={handleNumClick} className='standard-btn'>4</button>
            <button onClick={handleNumClick} className='standard-btn'>5</button>
            <button onClick={handleNumClick} className='standard-btn'>6</button>
            <button>+</button>
            <button onClick={handleNumClick} className='standard-btn'>1</button>
            <button onClick={handleNumClick} className='standard-btn'>2</button>
            <button onClick={handleNumClick} className='standard-btn'>3</button>
            <button>-</button>
            <button>.</button>
            <button onClick={handleNumClick} className='standard-btn'>0</button>
            <button>/</button>
            <button>X</button>
        </div>
    )
}

export default ButtonList;