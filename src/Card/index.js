import "./styles.css";
import { Button, Card } from 'react-bootstrap';

function MainCard(props) {

    return (
        <div className="mainCard">
            <Card>
                <Card.Img className="cardImage" variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>
                        <h3>
                            {props.title}
                        </h3>
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text>
                        <h3>{props.price}</h3>
                    </Card.Text>
                    <Button variant="warning">More Details</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default MainCard;
