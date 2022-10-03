import { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";


function SideMenu(props) {

    const [closed, setclosed] = useState(true);

    function toggleSideMenu() {
        setclosed(!closed)
    }
    return (
        <div className={`side-menu-wrapper ${closed && 'closed'}`}>
            <div className="side-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <ul name="selectList" id="selectList" >
                        {props.categories.map(i => (
                            <li key={i}>
                                <Link to="/categories?category=">{i}</Link>
                            </li>
                        ))}
                    </ul>
                    <li><Link to="/contact-us">Contact us</Link></li>
                </ul>
            </div>
            <div className="side-menu-handle">
                <button onClick={toggleSideMenu}>{closed ? <img src={process.env.PUBLIC_URL + '/burger-menu.png'} /> : <img src={process.env.PUBLIC_URL + '/close.png'} />}</button>
            </div>
        </div>
    )
}

export default SideMenu