import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleProduct = ({ items }) => {
    return (
        <Col sm={12} md={4}>
            <Card>
                <Card.Body>
                    <Card.Title>{items.title}</Card.Title>
                    <Card.Text>
                        {items.price}
                    </Card.Text>
                    <Card.Text className='text-bg-success'>
                        {items.category}
                    </Card.Text>
                    <Button variant="dark">Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleProduct