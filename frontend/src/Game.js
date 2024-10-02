import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';


function Game() {
    const navigate = useNavigate();

    const [number, setNumber] = useState(1);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [numCorrect, setNumCorrect] = useState(0);

    const changeNumber = () => {
        setNumber((prevNumber) => (prevNumber + 1));
        setInputValue('');
    }

    const handleSubmit = () => {
        const userAnswer = inputValue.trim().toLowerCase();
        const correctAnswer = questions[number - 1].Answer.trim().toLowerCase();
        console.log(userAnswer, correctAnswer);
        if (number < 10) {
            if (userAnswer === correctAnswer) {
                setNumCorrect(numCorrect + 1);
                console.log('Correct answer!');
            } else {
                console.log('Incorrect answer!');
            }
            changeNumber();
        } else {
            // display correctness of final answer
            if (userAnswer === correctAnswer) {
                setNumCorrect(numCorrect + 1);
                console.log('Correct answer!');
            }
            navigate('/results', { state: { score: numCorrect } });
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/questions');
                setQuestions(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="Game" style={{
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
                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            <Card bg="light" border="success" style={{ height: '18rem', width: '30rem' }} className="text-center">
                                <Card.Header>Question: {number}</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{ color: "green" }} className='mb-4'>
                                        Score: {numCorrect}
                                    </Card.Text>
                                    <Card.Text className='mb-4'>
                                        {questions[number - 1]?.Question || "No question available"}
                                    </Card.Text>

                                    <Row>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder='Type your answer here'
                                            value={inputValue}
                                            onChange={handleInputChange}
                                        />
                                    </Row>
                                    <Button className="mt-4" variant="primary" onClick={handleSubmit}>Submit</Button>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Game;
