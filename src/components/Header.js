import Theme from "./Theme";

const Header = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <h2>Calc</h2>
            <Theme />
        </div>
    )
}

export default Header;