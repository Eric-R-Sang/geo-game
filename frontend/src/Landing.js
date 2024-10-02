import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardImgOverlay from 'react-bootstrap/esm/CardImgOverlay';

function Landing() {
    return (
        <div className="Landing" style={{
            backgroundImage: "url('/wordlwide.jpeg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <header className="Geo-Game"> </header>
            <Container fluid className="vh-100 vw-100">
                <Row className="w-100 h-100 align-items-center justify-content-center">
                    <Col xs="auto">
                        <Card bg="light" border="success" style={{ height: '18rem', width: '30rem' }} className="text-center">
                            <Card.Img src="/pitbull.png" alt="pitbull image" />
                            <CardImgOverlay>
                                <Card.Header>Pitbull's Planet</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Look up in the sky, it's a bird, it's a plane / No, it's just me, ain't a damn thing changed. (From "Timber")
                                    </Card.Text>
                                    <Card.Text>
                                        <small className='text-muted'>~ Mr. World Wide</small>
                                    </Card.Text>
                                    <Button variant="primary" href="/game">Play</Button>
                                </Card.Body>
                                <Card.Footer style={{ color: 'green' }}>Pitbull (not) Approved</Card.Footer>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;
