import "./styles.scss";
import Card from '../../components/Card';
import useFetch from "../../hooks/useFetch";

function AllProducts() {

    const [data] = useFetch('https://fakestoreapi.com/products')

    return (
        <div className="product-wrapper">
            {data && data.map(d =>
                <Card
                    key={d.title}
                    image={d.image}
                    title={d.title}
                    description={d.description}
                    price={d.price} />
            )}
        </div>
    )
};






export default AllProducts;