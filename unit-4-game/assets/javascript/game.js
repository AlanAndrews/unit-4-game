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
   
    function wins() {
        alert("sup");
        wins++;
        $("#wins").text(wins);
        initializeGame();
    }

    function losses() {
        alert("sup");
        losses++;
        $("#losses").text(losses);
        initializeGame();
    }

    function initializeGame() {
        randomNum = Math.floor(Math.random() * 121) + 19;
        $("#randomNum").text(randomNum);
        console.log(randomNum);
        xtalOne = Math.floor(Math.random() * 12) + 1;
        xtalTwo = Math.floor(Math.random() * 12) + 1;
        xtalThree = Math.floor(Math.random() * 12) + 1;
        xtalFour = Math.floor(Math.random() * 12) + 1;
        console.log(xtalOne);
        console.log(xtalTwo);
        console.log(xtalThree);
        console.log(xtalFour);

    }

    $("#crystalOne").on("click", function(){
        userNum = userNum + xtalOne;
        console.log(userNum)

        // $("#userNumber").text(userNum);
        if (userNum == randomNum) {
            wins();
        }
        else if (userNum > randomNum) {
            losses();
        }
    });

    $("#crystalTwo").on("click", function(){
        userNum = userNum + xtalTwo;
        console.log(userNum)

        // $("#userNumber").text(userNum);
        if (userNum == randomNum) {
            wins();
        }
        else if (userNum > randomNum) {
            losses();
        }
    });


    $("#crystalThree").on("click", function(){
        userNum = userNum + xtalThree;
        console.log(userNum)

        // $("#userNumber").text(userNum);
        if (userNum == randomNum) {
            wins();
        }
        else if (userNum > randomNum) {
            losses();
        }
    });

    $("#crystalFour").on("click", function(){
        userNum = userNum + xtalFour;
        console.log(userNum)

        // $("#userNumber").text(userNum);
        if (userNum == randomNum) {
            wins();
        }
        else if (userNum > randomNum) {
            losses();
        }
    });
    
});
// $(document).ready(function(){
//     // global variables
//     var winCount = 0;
//     var lossCount = 0;
//     var randomNum = "";
//     var userScore = "";
//     var xtalOneClicked = 0;
//     var xtalTwoClicked = false;
//     var xtalThreeClicked = false;
//     var xtalFourClicked = false;

//     function initializeGame() {
//         randomNum = "";
//         userScore = "";
        
//         $("#randomNum", "#userScore").empty();
//       }

//     // Click listener that will trigger a random number to be generated upon click
//         // generates a random number between 19 and 120
//         var random = Math.floor(Math.random() * 121) + 19;
//             console.log(random);
//             $("#randomNum").text(random);
        
//         // Code that generates random number between 1 and 12 for each xtal upon clicking
//         $("#crystalOne").on("click", function(){

//             xtalOneClicked++;


//             console.log(xtalOneClicked);
//             var xtalOne = Math.floor(Math.random() * 12) + 1;
//                 console.log(xtalOne);
        
//             // if (xtalOneClicked = 1) {
//             //     var xtalOne = "hi";
//             //     console.log(xtalOne);
      
//             //   }
//             //   else {
//             //     var xtalOne = Math.floor(Math.random() * 12) + 1;
//             //     console.log(xtalOne);
//             //     // var xtalOneClicked = false;
//             //   }




        
        
    
//         });

//         $("#crystalTwo").on("click", function(){
//         var xtalTwo = Math.floor(Math.random() * 12) + 1;
//             console.log(xtalTwo)
//         });

//         $("#crystalThree").on("click", function(){
//         var xtalThree = Math.floor(Math.random() * 12) + 1;
//             console.log(xtalThree)
//         });

//         $("#crystalFour").on("click", function(){
//         var xtalFour = Math.floor(Math.random() * 12) + 1;
//         console.log(xtalFour)
//         });

    

    
// });
