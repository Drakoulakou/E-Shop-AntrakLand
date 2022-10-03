import "./styles.scss";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";
import { useContext } from "react";
import { CategoriesContext } from '../App'

function Header(props) {

    const categories = useContext(CategoriesContext);

    return (
        <header className='header'>
            <div className="mainMenu">
                <img className="logo" src={props.image} alt="Our company logo" />
                <h1 style={{ color: props.xrwma }}>
                    {props.companyName}
                </h1>
            </div>
            <nav>
                <ul className="rightMenu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><DropDown title='Categories' categories={categories} /></li>
                    <li><Link to="/contact-us">Contact us</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;