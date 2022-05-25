import "./styles.css";

function Header(props) {

    return (
        <header className='header'>
            <div className="mainMenu">
                <img className="logo" src={props.image} />
                <h1>
                     {props.companyName}
                </h1>
            </div>
           
            <div>
                <ul className="rightMenu">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;