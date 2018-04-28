$(document).ready(function(){
    var randomNum = Math.floor(Math.random() * 121) + 19;
    var wins = 0;
    var losses = 0;
    var xtalOne = Math.floor(Math.random() * 12) + 1;
    var xtalTwo = Math.floor(Math.random() * 12) + 1;
    var xtalThree = Math.floor(Math.random() * 12) + 1;
    var xtalFour = Math.floor(Math.random() * 12) + 1;
    var userNum = 0;
    
    initializeGame();
    
    // $("#randomNum").text(randomNum);
    // $("#userScore").text(NumToGuess);
   
    // function wins() {
    //     alert("sup");
    //     wins++;
    //     $("#wins").text(wins);
    //     initializeGame();
    // }

    // function losses() {
    //     alert("sup");
    //     losses++;
    //     $("#losses").text(losses);
    //     initializeGame();
    // }

    function initializeGame() {
        randomNum = Math.floor(Math.random() * 121) + 19;
        $("#randomNum").text(randomNum);
        // console.log(randomNum);
        xtalOne = Math.floor(Math.random() * 12) + 1;
        xtalTwo = Math.floor(Math.random() * 12) + 1;
        xtalThree = Math.floor(Math.random() * 12) + 1;
        xtalFour = Math.floor(Math.random() * 12) + 1;
        userNum = 0;
        // console.log(xtalOne);
        // console.log(xtalTwo);
        // console.log(xtalThree);
        // console.log(xtalFour);

    }

    $("#crystalOne").on("click", function(){
        userNum = userNum + xtalOne;
        console.log(userNum)
        $("#userNumber").text(userNum);
        if (userNum == randomNum) {
            wins++;
            $("#wins").text("Wins: " + wins);
            initializeGame();
            // wins();

        }
        else if (userNum > randomNum) {
            losses++;
            $("#losses").text("Losses: " + losses);
            initializeGame();
            // losses();
        }
        // if (userNum == randomNum) {
        //     wins();
        // }
        // else if (userNum > randomNum) {
        //     losses();
        // }
    });

    $("#crystalTwo").on("click", function(){
        userNum = userNum + xtalTwo;
        console.log(userNum)
        $("#userNumber").text(userNum);
        if (userNum == randomNum) {
            wins++;
            $("#wins").text("Wins: " + wins);
            initializeGame();
            // wins();

        }
        else if (userNum > randomNum) {
            losses++;
            $("#losses").text("Losses: " + losses);
            initializeGame();
            // losses();
        }
    });


    $("#crystalThree").on("click", function(){
        userNum = userNum + xtalThree;
        console.log(userNum)
        $("#userNumber").text(userNum);
        if (userNum == randomNum) {
            wins++;
            $("#wins").text("Wins: " + wins);
            initializeGame();
            // wins();

        }
        else if (userNum > randomNum) {
            losses++;
            $("#losses").text("Losses: " + losses);
            initializeGame();
            // losses();
        }
        // if (userNum == randomNum) {
        //     wins();
        // }
        // else if (userNum > randomNum) {
        //     losses();
        // }
    });

    $("#crystalFour").on("click", function(){
        userNum = userNum + xtalFour;
        console.log(userNum)
        $("#userNumber").text(userNum);
        if (userNum == randomNum) {
            wins++;
            $("#wins").text("Wins: " + wins);
            initializeGame();
            // wins();

        }
        else if (userNum > randomNum) {
            losses++;
            $("#losses").text("Losses: " + losses);
            initializeGame();
            // losses();
        }
        // if (userNum == randomNum) {
        //     wins();
        // }
        // else if (userNum > randomNum) {
        //     losses();
        // }
    });
    
});
