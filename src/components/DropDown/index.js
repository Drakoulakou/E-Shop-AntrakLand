import "./styles.scss";
import { useState } from "react";
import { Link } from "react-router-dom";


function DropDown(props) {

    const [dropDown, setdropDown] = useState(false);

    function dropDownMenu() {

        return (
            <div className='drop-down-menu'>
                <ul name="selectList" id="selectList" >
                    {props.categories.map(i => (
                        <li key={i}>
                            <Link to="/categories?category=">{i}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div onMouseLeave={() => setdropDown(false)}
            onMouseEnter={() => setdropDown(true)}>
            <label
            >{props.title}
            </label>
            {dropDown && dropDownMenu()}
        </div>
    )
}

export default DropDown;