import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// Images to insert should be in the folder "public"
// Lines that are commented out are optional and just for reference
// If you want to format the images (so that the card titles are aligned),
// you can try to use holder.js, starting with npm install holderjs

function GroupExample() {
  return (
    <CardGroup>

      <Card>
        <Card.Img variant="top" src="2.jpeg" alt="No card image"/>
        <Card.Body>
          <Card.Title>Teammate A</Card.Title>
          {/* <Card.Text> */}
            {/* Teammate A description */}
          {/* </Card.Text> */}
        </Card.Body>
        {/* <Card.Footer> */}
          {/* <small className="text-muted">Footer contents (if needed)</small> */}
        {/* </Card.Footer> */}
      </Card>

      <Card>
        <Card.Img variant="top" src="2.jpeg" alt="No card image"/>
        <Card.Body>
          <Card.Title>Teammate B</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="3.jpeg" alt="No card image"/>
        <Card.Body>
          <Card.Title>Teammate C</Card.Title>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="3.jpeg" alt="No card image"/>
        <Card.Body>
          <Card.Title>Teammate D</Card.Title>
        </Card.Body>
      </Card>
      
    </CardGroup>
  );
}

export default GroupExample;