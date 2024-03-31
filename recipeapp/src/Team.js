import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './groupmember.css';

// Images to insert should be in the folder "public"
// Lines that are commented out are optional and just for reference
// If you want to format the images (so that the card titles are aligned),
// you can try to use holder.js, starting with npm install holderjs

function GroupExample() {
  return (
    <CardGroup>
      <Card className="card-custom">
        <Card.Img variant="top" src="headshot/person1.png" alt="Athena Bai" className="card-img-top"/>
        <Card.Body>
          <Card.Title>Athena Bai</Card.Title>
        </Card.Body>
      </Card>

      <Card className="card-custom">
        <Card.Img variant="top" src="headshot/person2.png" alt="Gabriella Vukomanovic" className="card-img-top"/>
        <Card.Body>
          <Card.Title>Gabriella Vukomanovic</Card.Title>
        </Card.Body>
      </Card>

      <Card className="card-custom">
        <Card.Img variant="top" src="headshot/person3.png" alt="Qiping Zhang" className="card-img-top"/>
        <Card.Body>
          <Card.Title>Qiping Zhang</Card.Title>
        </Card.Body>
      </Card>

      <Card className="card-custom">
        <Card.Img variant="top" src="headshot/person4.png" alt="Yao Sun:)" className="card-img-top"/>
        <Card.Body>
          <Card.Title>Yao Sun:)</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
