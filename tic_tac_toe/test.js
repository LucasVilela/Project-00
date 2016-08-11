//REFERENCE TO COPARE THE STORED PLAYERS VARIABLE
var moves = [1, 5, 9];
var winTest = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 9],
    [4, 5, 6],
    [7, 8, 9]
];


var checkWin = function(results) {
    for (var i = 0; i < winTest.length; i++) {
        var matches = 0;
        for (var j = 0; j < results.length; j++) {

            if (winTest[i].includes(results[j])) {
                matches += 1;
                // var matchesResult =[];
                console.log("match");
            }
        }
        if (matches === 3) {
            console.log("You win!");

        }
    }
};

checkWin(moves);
