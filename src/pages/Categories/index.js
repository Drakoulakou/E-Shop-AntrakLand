import "./styles.scss";
import { useLocation } from "react-router-dom";


function Categories() {
    
    const search = useLocation().search;
    const category = new URLSearchParams(search).get('category');

    return <h1>Categories: {category}</h1>
}

export default Categories