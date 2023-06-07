import { useState } from "react"
import '../css/Theme.css';

const Theme = () => {
    const [theme, setTheme] = useState(1);

    return (
        <div className="theme">
            <h2>Theme</h2>
            <div className="theme-slider">
                <div className="theme-buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
        </div>
    )
}

export default Theme;