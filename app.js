function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which city is known as the Pink City?", ["Mysore", "Karnataka","Jaipur", "Hyderabad"], "Jaipur"),


    new Question("Which is the most populated country in the world?", ["India", "China","Bangladesh", "Australia"], "China"),
    

    new Question("India lies under which continent?", ["Europe", "Asia","Africa", "North America"], "Asia"),
    

    new Question("Which is the fastest animal in the world?", ["Cheetah", "Lion","Deer", "Tiger"], "Cheetah"),


    new Question("What continent is also considered a country?", ["Antartica", "North America","South America","Australia"], "Australia"),
    
    
    new Question("How many weeks in a year", ["50","57","45","52","47"],"52"),


    new Question("Who invented television?", ["John Logie Baird","Thomas Alva Edition","Humphrey Davy","John Loud"], "John Logie Baird"),
        

];


var quiz = new Quiz(questions);


populate();






