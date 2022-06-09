import "./styles.css";
import { Button, Card } from 'react-bootstrap';

function MainCard(props) {

    return (
        <div className="mainCard">
            <Card>
                <Card.Img className="cardImage" variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>
                        <h4>
                            {props.title}
                        </h4>
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text>
                        <h4>{props.price}</h4>
                    </Card.Text>
                    <Button className="button" variant="warning">
                        {props.button}
                    </Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default MainCard;
