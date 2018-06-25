var i = 0;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var answerChoices = [];
var values = "";
var number = 30;

jQuery(document).ready(function($){
    var prompt = [{
        question: "What is the capitol of Spain?",
        answerChoices: ["Barcelona", "Madrid", "Valencia", "Seville"],
        value: 1,
    
    },
    {
        question: "What does the word 'karaoke' mean in Japanese?",
        answerChoices: ["Singing", "Tipsy", "Empty Orchestra", "Solo" ],
        value: 2,
    },
    
    {
        question: "What country has the most golf courses per capita?",
        answerChoices: ["America", "Bermuda", "Greece", "Australia" ],
        value: 1,
        
    },
    {
        question: "Which of these world famous sites is the tallest?",
        answerChoices: ["Uluru", "Chrysler Building in NYC", "The Eiffel Tower", "The Great Pyramid of Giza" ],
        value: 0, 
        
    },
    {
        question: "Which of these mountain ranges is located in South America?",
        answerChoices: ["Simien", "Atlas", "Tibesti", "Drakensberg" ],
        value: 3,
        
    },
    {
        question: "How many mph does the average commercial jet take off at?",
        answerChoices: ["1,000-1,2000", "100-150", "550-580", "200-220" ],
        value: 2,
        
    },
      {
        question: "What city makes the most cereal in the world?",
        answerChoices: ["San Francisco, CA", "Battle Creek, MI", "Kansas City, MO", "London, England" ],
        value: 1,
        
    },
     {
        question: "What is the most visited amusement park?",
        answerChoices: ["Cedar Point", "Sea World", "Magic Kingdom", "Disney World" ],
        value: 2,
        
    },
     {
        question: "What is the average people per day that get married in Las Vegas?",
        answerChoices: ["300", "100", "30", "120" ],
        value: 0,
      
    },
     {
        question: "What is the busiet Airport?",
        answerChoices: ["O'Hare International in Chicago", "Los Angeles International Airport", "Beijing Capital International Airport", "Hartsfield-Jackson Airport in Atlanta" ],
        value: 3,
       }
];




$(".col-md-12").hide();
$("#next").hide();
// functions

$("#timer-div").click (function (){
    console.log("i was clicked"); 
      run ();
});
//displays the question when statt button is clicked
$("#timer-div").on("click", function () {
    $('#prompt-div').show(); //Added to display question, they are hidden by $(".col-md-6").hide();
    $(".main").empty();
    $("#timer-div").empty();
    $("#next").show();
    var currentQuestion = `
    <h4>${prompt[i].question}</h4>
    <input type="radio" name="choices" value="0">${prompt[i].answerChoices[0]}</input><br/>
    <input type="radio" name="choices" value="1">${prompt[i].answerChoices[1]}</input><br/>
    <input type="radio" name="choices" value="2">${prompt[i].answerChoices[2]}</input><br/>
    <input type="radio" name="choices" value="3">${prompt[i].answerChoices[3]}</input><br/><br/>
    
    `
    ;// Typo ${prompt[i].question}
$("#prompt-div").html(currentQuestion);
console.log(currentQuestion);
});
$("#submit").on("click", function(){
    var oldQuestion = prompt[i];
    checkAnswer(oldQuestion);
    i++;
    //if i is greater than 9 then display the results then (else) display all next question 
    if (i > 9){
        // Shw results
        $('#prompt-div').empty();
        var currentQuestion = `
            <h1>NumberRIght</h1>
            <h2>${correct}</h2>
        `;

        $("#prompt-div").html(currentQuestion);

    }
    else{
        var currentQuestion = `
        <h4>${prompt[i].question}</h4>
        <input type="radio" name="choices" value="0">${prompt[i].answerChoices[0]}</input><br/>
        <input type="radio" name="choices" value="1">${prompt[i].answerChoices[1]}</input><br/>
        <input type="radio" name="choices" value="2">${prompt[i].answerChoices[2]}</input><br/>
        <input type="radio" name="choices" value="3">${prompt[i].answerChoices[3]}</input><br/><br/>
        `;
        $('#prompt-div').empty();
        $("#prompt-div").html(currentQuestion);
    }
    
stop();    
run();
});


});

function checkAnswer (oldQ){
    var checked =
    $("input:radio[name=choices]:checked").val();
    console.log(checked);
    if (checked == oldQ.value) {
        correct++;
        console.log("correct " + correct)
        console.log("right answer")
    } else {
        incorrect++;
        console.log("incorrect " + incorrect)
        console.log("wrong answer")
    }
};

function run() {
    clearInterval(intervalId);
    number= 21;
    intervalId = setInterval(decrement, 1000);
    function decrement() {
        number--;
        $("#timer-div").html("<h2>" + number + "</h2>");
        if (number === 0) {
          stop();
          alert("Time Up!");
            }
        }
}
function stop() {
    clearInterval(intervalId);
}