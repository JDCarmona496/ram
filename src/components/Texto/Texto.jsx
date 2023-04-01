import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function BodyOnlyExample() {
  return (
    <Container>
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </Container>
  );
}

export default BodyOnlyExample;