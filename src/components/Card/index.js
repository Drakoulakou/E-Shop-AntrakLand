import "./styles.scss";
import { Button, Card } from 'react-bootstrap';

function MainCard(props) {

    return (
        <div className="mainCard">
            <Card>
                <Card.Body className='card'>
                    <Card.Title className='cardTitle'>
                        <span>
                            {props.title}
                        </span>
                    </Card.Title>
                    <Card.Img className="cardImage" variant="top" src={props.image} />
                    <Card.Text>
                        <span className='description' >{props.description}</span>
                    </Card.Text>
                    <Card.Text>
                        <span>{props.price}€</span>
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
