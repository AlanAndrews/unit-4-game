$(document).ready(function(){
    // global variables
    var winCount = 0;
    var lossCount = 0;
    var randomNum = "";
    var userScore = "";
    var xtalOneClicked = false;
    var xtalTwoClicked = false;
    var xtalThreeClicked = false;
    var xtalFourClicked = false;



    // Click listener that will trigger a random number to be generated upon click
        // generates a random number between 19 and 120
        var random = Math.floor(Math.random() * 121) + 19;
            console.log(random);
        
        // Code that generates random number between 1 and 12 for each xtal upo clicking
        $("#crystalOne").on("click", function(){
        
            if (xtalOneClicked) {
                var xtalOne = "hi";
                console.log(xtalOne);
      
              }
              else {
                var xtalOne = Math.floor(Math.random() * 12) + 1;
                console.log(xtalOne);
              }




        
        
    
        });

        $("#crystalTwo").on("click", function(){
        var xtalTwo = Math.floor(Math.random() * 12) + 1;
            console.log(xtalTwo)
        });

        $("#crystalThree").on("click", function(){
        var xtalThree = Math.floor(Math.random() * 12) + 1;
            console.log(xtalThree)
        });

        $("#crystalFour").on("click", function(){
        var xtalFour = Math.floor(Math.random() * 12) + 1;
        console.log(xtalFour)
        });

    

    
});
