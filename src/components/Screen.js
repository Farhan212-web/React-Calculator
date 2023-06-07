import '../css/Screen.css';

const Screen = (props) => {
    return (
        <div className="screen">
            <h1>{props.currentNum}</h1>
        </div>
    )
}

export default Screen;