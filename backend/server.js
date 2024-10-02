const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Make sure this doesn't conflict with your React app's port

app.use(cors());

let questions = [];

// Read and parse the CSV file
fs.createReadStream('geography_questions.csv')
    .pipe(csv())
    .on('data', (row) => {
        questions.push(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

app.get('/api/questions', (req, res) => {
    const numQuestions = Math.min(10, questions.length);
    const randomQuestions = getRandomQuestions(questions, numQuestions);
    res.json(randomQuestions);
});

function getRandomQuestions(array, n) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});