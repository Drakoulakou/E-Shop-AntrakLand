import "./styles.scss";
import { Button, Card } from 'react-bootstrap';

function MainCard(props) {

    return (
        <div className="mainCard">
            <Card>
                <Card.Body className='card'>
                    <Card.Title className='cardTitle'>
                        <h4>
                            {props.title}
                        </h4>
                    </Card.Title>
                    <Card.Img className="cardImage" variant="top" src={props.image} />
                    <Card.Text>
                        <p className='description' >{props.description}</p>
                    </Card.Text>
                    <Card.Text>
                        <h4>{props.price}€</h4>
                    </Card.Text>
                    <Button className="button" variant="warning">
                        {props.button} More Details
                    </Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default MainCard;
