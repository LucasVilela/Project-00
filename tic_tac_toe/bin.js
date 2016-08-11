//STORE THE POINTS :
var pointsPlayer1 = 0;
var pointsPlayer2 = 0;
var clickedPlayer1 = [];
var clickedPlayer2 = [];
var drawnCounter = 0;
var endGame;
var gameCounter = 0;
var winner = "false";
var playerOne = true;

$(document).ready(function() {
    console.log("Ready");
    var moves = 0;
    var player1;
    var player2;
    //REFERENCE TO COPARE THE STORED PLAYERS VARIABLE
    var winTest = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ];

    var reset = function() {
        // All the code necessary to reset the game to it's starting state.
        // Reset te clickedPlayer1 and clickedPlayer2 arrays;
        clickedPlayer1 = []; // REMOVE THE STORED VALUES
        clickedPlayer2 = []; // REMOVE THE STORED VALUES
        matches = 0; //REMOVE ANY MATCHES
        moves = 0; //RESET MOVES
        $(".gameTable").on("click", clickHandler);
        $(".gameTable").text("");
        // winner = "none";
        endGame = false;
    };
    var clickHandler = function() {
        //COUNTING MOVIMENTS
        moves++;

        // IDENTIFY PLAYERS
        if (moves % 2 === 0) {
            player1 = false;
            player2 = true;

        } else {
            player1 = true;
            player2 = false;
        }


        // CREATE THE VARIABLE THAT STORES THE NUMBER CLICKED

        var idAttr = $(this).attr('id');
        //CHANGE THE TEXT WHEN CLICKED
        if (player1 === true) {
            playerOne = true;
            $(this).text('X');
        } else {
            playerOne = false;
            $(this).text('O');
        }
        // TURN OFF THE CLICK BUTTON
        $(this).off("click");


        //-----//STORE THE VARIABLES IN THE CORRECT PLAYER
        var idOfClickedInNumber = (parseInt(idAttr));
        if (player1 === true) {
            clickedPlayer1.push(idOfClickedInNumber);
            checkWin(clickedPlayer1);
        } else {
            clickedPlayer2.push(idOfClickedInNumber);
            checkWin(clickedPlayer2);
        }

        //LOG MESSAGES
        if (player1 === true) {
            // console.log("Player 1 TURN.. Done");
        } else {
            // console.log("Player 2 TURN..Done");
        }

        // console.log("Player 1 clicked " + clickedPlayer1);
        // console.log("Player 2 clicked " + clickedPlayer2);

        if (endGame === true) {
            // console.log("player 1 = "+ pointsPlayer1);
            // console.log("player 2 = "+ pointsPlayer2);
            // console.log("Player 1 clicked " + clickedPlayer1);
            // console.log("Player 2 clicked " + clickedPlayer2);
        }
        // console.log("Game: "+gameCounter);
        // console.log("Points Player 1: "+ pointsPlayer1 );
        // console.log("Points Player 2: "+ pointsPlayer2 );
        // console.log("Drawns :" + drawnCounter);
        ///========jquery CHANGE elements ======////
        $(".scorePl2").text(pointsPlayer2);
        $(".scorePl1").text(pointsPlayer1);
        $(".round").html(gameCounter);
        $(".draw ").text(drawnCounter);

    };




    var checkWin = function(testWinner) {
        var winner = false;
        for (var i = 0; i < winTest.length; i++) {
            var matches = 0;
            var currentCombo = winTest[i];
            if ( testWinner.includes( currentCombo[0] ) && testWinner.includes( currentCombo[1] ) && testWinner.includes( currentCombo[2] ) ) {
                winner = true;
                $(".gameTable").off("click");
                gameCounter += 1;
                if (winner === true && playerOne === true) {
                    pointsPlayer1 +=1;
                    endGame = true;
                    reset();
                }else if (winner === true && playerOne ===false) {
                    pointsPlayer2 +=1;
                    endGame = true;
                    reset();
                }else {
                    drawnCounter+=1;
                    endGame = true;
                    reset();
                }
            }
            // for (var j = 0; j < testWinner.length; j++) {
            //     if (winTest[i].includes(testWinner[j])) {
            //         matches += 1;
            //     }
            // }
            //if (matches === 3) {

            //    gameCounter += 1;
                // console.log( "=== YOU WIN ===");
            //    if (player1 === true) {
                    // console.log("Player 1 WIN");
            //        pointsPlayer1 +=1;
            //        winner = true;
            //        endGame = true;
                    // reset();
            //    }else {
                    // console.log("Player 2 WIN");
            //        pointsPlayer2 +=1;
            //        winner = true;
            //        endGame = true;
                    // reset();
            //    }

            //}
            //if (winner === "false" && moves === 9 ) {
            //    drawnCounter +=1;

            //    endGame =true;
                // reset();
            //    return console.log("===IT'S A DRAWN===");



        }

        //}
        //if ( winner ) {
            //reset();
        //}
        //if (endGame === true) {
            //reset();
        //}
    };
    $(".gameTable").on("click", clickHandler);

// var resetButton = $(this).attr(('reset').on;});
});
