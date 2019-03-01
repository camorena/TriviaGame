/*
    TRIVIA GAME
    Carlos Moreno
    U of M Coding Bootcamp 02/28/2019
*/

const questionary = [
    {
        "theme": "tema 1",
        "trivia": [{
            "question": 'Question1',
            "options": ["option11", "option12", "option13", "option14"],
            "answer": 4
        },
        {
            "question": 'Question2',
            "options": ["option21", "option22", "option23", "option24"],
            "answer": 3
        },
        {
            "question": 'Question3',
            "options": ["option31", "option32", "option33", "option34"],
            "answer": 1
        },
        ]
    },
    {
        "theme": "tema 2",
        "trivia": [{
            "question": 'Question1',
            "options": ["option11", "option12", "option13", "option14"],
            "answer": 4
        },
        {
            "question": 'Question2',
            "options": ["option21", "option22", "option23", "option24"],
            "answer": 3
        },
        {
            "question": 'Question3',
            "options": ["option31", "option32", "option33", "option34"],
            "answer": 1
        },
        ]
    },
    {
        "theme": "tema 3",
        "trivia": [{
            "question": 'Question1',
            "options": ["option11", "option12", "option13", "option14"],
            "answer": 4
        },
        {
            "question": 'Question2',
            "options": ["option21", "option22", "option23", "option24"],
            "answer": 3
        },
        {
            "question": 'Question3',
            "options": ["option31", "option32", "option33", "option34"],
            "answer": 1
        },
        ]
    }
];


var qRemaining = 0;               // Max user tries 


var Q = questionary[Math.floor(Math.random() * questionary.length)];
var T = Q.trivia;
//console.log("trivia ", T);

$("#theme").text(Q.theme);

$("#question").text(T[0].question);
console.log("question ",T[0].question);

//$(".card-body").empty();

display();

var btn;
var selection;
var answer = T[0].answer;

function evalAnswer(resp) {
    if (resp === answer) {
        rightAnswer(resp)
    }
}

function rightAnswer(resp){
    for (i=1;i < 5;i++){
        btnId = "button[data-option=" + i + "]";
        console.log(btnId);
        if (i === resp) {
            span = $("<span>");
            span.addClass("glyphicon glyphicon-remove");
            span.text(T[0].options[j]);
            $(btnId).next(span);
            $(btnId).attr("class","btn btn-success btn-block");
        } else {
            //$(btnId).fadeOut("slow");
            $(btnId).fadeTo("slow", 0.15);
        }
    }
}

function display() {
    //for (i = 0; i < T.length; i++) {
    for (j = 0; j < T[0].options.length; j++) {

        btn = $("<button>");
        
        btn.addClass("btn btn-primary btn-block");

        btn.attr("data-option", j+1);

        btn.text(T[0].options[j]);

        div = "div#button" + (j+1)
        
        $(div).append(btn);
    }
}
//}

$(".btn").on("click", function (event) {
    btnid = $(this).attr("data-option");
    evalAnswer(parseInt(btnid));
    
});