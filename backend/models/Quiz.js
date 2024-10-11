const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    questions: [
        {
            questionText: {
                type: String,
                required: true
            },
            answerChoices: [
                {
                    type: String
                }
            ],
            correctAnswer: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Quiz', QuizSchema);
