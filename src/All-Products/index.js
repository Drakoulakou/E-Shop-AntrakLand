import "./styles.scss";
import { useState, useEffect } from 'react';
import Card from '../Card';



function AllProducts() {
    const [allProducts, setallProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setallProducts(json)
            })
    }, [])

    function getContent() {
        return (
            <div className="product-wrapper">
                {allProducts.map(d =>
                    <Card
                        image={d.image}
                        title={d.title}
                        description={d.description}
                        price={d.price} />
                )}
            </div>)
    }

    return (
        <div>
            <h2>All products</h2>
            {allProducts.length === 0 ? <div>Loading...</div> : getContent()}
        </div>
    );
}

export default AllProducts;