/*
    TRIVIA GAME
    Carlos Moreno
    U of M Coding Bootcamp 02/28/2019
*/

var tt;       // Trivia theme
var tq = [];  // Trivia questions
var to = [];  // Trivia options
var ta;       // Trivia answer
var qn = 0;   // Question Number 
var qr = 0;   // questions remaining 

$("#stats").hide();

function nextTheme() {
    tt = questionary[Math.floor(Math.random() * questionary.length)];
    console.log("Theme [tt]", tt);
}

function nextTrivia() {
    tq = tt.trivia;
    console.log("Trivia [tq]", tq, " Length ", tq.length);
    qn = 0;
    to = tq[qn].options;
    console.log("Trivia options [to]", to);
    ta = tq[qn].answer;
    console.log("Trivia answer [ta]", ta);
}

function nextQuestion() {
    qn++;
}

function evalAnswer(resp) {
    for (i = 1; i < to.length; i++) {
        btnId = "button[data-option=" + i + "]";
        //console.log(btnId);
        if ((i === resp) && (i == ta)) {
            $(btnId).attr("class", "btn btn-success btn-lg btn-block");
        } else {
            if ((i === resp) && (i = !ta)) {
                $(btnId).attr("class", "btn btn-danger btn-lg btn-block");
            } else {
                $(btnId).fadeTo("slow", 0.15);
            }
        }
    }
}

function showTrivia() {

    $("#theme").text(tt.theme);

    $("#question").text(tq[qn].question);

    addButtonDiv(); // Create buttons place holder

    for (i = 0; i < to.length; i++) {

        btn = $("<button>");

        btn.addClass("btn btn-info btn-lg btn-block");

        btn.attr("data-option", i + 1);

        btn.attr("id", "btn" + i);



        btn.text(tq[qn].options[i]);

        div = "div#button" + (i + 1);

        $(div).append(btn);
    }
}

function addButtonDiv() {
    // Add first "row" 

    newRow = $("<div>");

    newRow.addClass("row");

    newRow.attr("id", "row1");

    $("#trivia").append(newRow);

    // Add button 1 
    newBtn = $("<div>");

    newBtn.addClass("col-md-6");

    newBtn.attr("id", "button1");

    $("#row1").append(newBtn);

    // Add button 2
    newBtn = $("<div>");

    newBtn.addClass("col-md-6");

    newBtn.attr("id", "button2");

    $("#row1").append(newBtn);

    // Add <hr> 
    newRow = $("<hr>");

    $("#trivia").append(newRow);

    // Add second "row" 

    newRow = $("<div>");

    newRow.addClass("row");

    newRow.attr("id", "row2");

    $("#trivia").append(newRow);

    // Add button 3 
    newBtn = $("<div>");

    newBtn.addClass("col-md-6");

    newBtn.attr("id", "button3");

    $("#row2").append(newBtn);

    // Add button 4
    newBtn = $("<div>");

    newBtn.addClass("col-md-6");

    newBtn.attr("id", "button4");

    $("#row2").append(newBtn);

}


$(".btn").on("click", function (event) {
    btnid = $(this).attr("data-option");
    evalAnswer(parseInt(btnid)); 
});

$("#start").on("click", function (event) {
    event.preventDefault();
    $("#start").remove();
    nextTheme();
    nextTrivia();
    showTrivia();
});