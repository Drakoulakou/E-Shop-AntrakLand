import "./styles.scss";
import { useState } from "react";

function CategoryLinks() {

    const [dropDown, setdropDown] = useState(false);

    function dropDownMenu() {

        return (
            <div className='drop-down-menu'>
                <ul name="selectList" id="selectList" >
                    <li value="option 1">Women's clothes</li>
                    <li value="option 2">Electronics</li>
                    <li value="option 3">Jeweleries</li>
                    <li value="option 4">Men's clothes</li>
                </ul>
            </div>
        )
    }

    return (
        <div onMouseLeave={() => setdropDown(false)}
            onMouseEnter={() => setdropDown(true)}>
            <label


            >Categories
            </label>
            {dropDown && dropDownMenu()}
        </div>
    )
}

export default CategoryLinks;