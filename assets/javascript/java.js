//Variables
let win = 0;
let loss = 0;
let notAnswered = 0;
let condition = null;
let playerChoice = null;
let correctAnswer = null;

//Trivia object/info
let trivia = [
    {
        question: 'What is the short hand command to send a commited file to a github repository?',
        answers: {
            a: 'git pull',
            b: 'git push',
            c: 'git add .',
            d: 'git clone',
        },
        correct: 'git push'
    },
    {
        question: 'What does RAM mean?',
        answers: {
            a: 'random access memory',
            b: 'remote access memory',
            c: 'rude annoying munchkins',
            d: 'really annoying mothers'
        },
        correct: 'random access memory'
    },
    {
        question: 'What is the definition for resolution?',
        answer: {
            a: 'the shortest distance between two items observed',
            b: 'the number of pixels on a display',
            c: 'the observable difference between two different objects',
            d: 'clarify of a monitor or image',
        },
        correct: 'the shortest distance between two items observed'
    }
];

document.readyState();
nextQ();

// for loop to swap between questions
function nextQ() {
    for (let i = 0; i = trivia.length; i++) {
        // setting up questions 
        $('.question').html(trivia[i].question);
        //setting up answer divs
        for (let j = 0; j = trivia[i].answer.length; j++) {
            let newAnswer = $(`".answer"+j`)
            newAnswer.html(trivia[i].answer[j])
            updateAnswer.val(trivia[i].answer[j]);
        }

        //On.Click Command to get answer
        $('.answer').on('click', function () {
            playerChoice = $(this).value();
            correctAnswer = trivia[i.correct];
            // Win Conditions
            if (playerChoice === undetermined) {
                notAnswered++;
                condition = false;
            }
            else if (playerChoice === correctAnswer) {
                win++;
                condition = true;
            } else {
                loss++
                condition = false;
            }
            displayAnswer();
        }
        )
    }
}
//Function for answering
function displayAnswer() {
    //Show answer
    $('.question').clear();
    $('.answer').clear();
    if (condition === true) {
        $('.head').html("Congratulations Correct");
        $('.correct').html(correctAnswer);
    } else {
        $('.head').html("Sorry.  WRONG!");
        $('.correct').html(correctAnswer);
    }
    setTimeout(timerOut, 1000 * 3);
}
function timerOut() {
    $('.head').clear();
    $('.correct').clear();
    nextQ();
}
