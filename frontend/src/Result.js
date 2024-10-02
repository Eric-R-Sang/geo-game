import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Results() {
    const location = useLocation();
    const navigate = useNavigate();
    const score = location.state?.score || 0;

    const handlePlayAgain = () => {
        navigate('/');  // Navigate back to the game page
    };

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
                        <Card>
                            <Card.Body className="text-center">
                                <Card.Title as="h2">Quiz Results</Card.Title>
                                <Card.Text as="h4">
                                    Your final score is: {score} out of 10
                                </Card.Text>
                                <Button variant="primary" onClick={handlePlayAgain}>
                                    Play Again
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Results;