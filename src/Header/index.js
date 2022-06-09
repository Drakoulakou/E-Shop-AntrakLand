import "./styles.css";
import { Link } from "react-router-dom";


function Header(props) {

    return (
        <header className='header'>
            <div className="mainMenu">
                <img className="logo" src={props.image} />
                <h1 style={{ color: props.xrwma}}>
                     {props.companyName}
                </h1>
            </div>
           
            <nav>
                <ul className="rightMenu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/contact-us">Contact us</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;