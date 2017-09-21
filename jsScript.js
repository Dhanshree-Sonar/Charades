var wordArray = "", wordArrayList = [], time, result = 0, randomNumber;
var startTime, totalTimeRun = 0, complete, countdown = 0.5*60*1000;
var resume_or_play = 0, play_or_pause = "play", counter = 0.5*60, countDigit = 1;
var listSection, ul, passOrCorrect = "correct", stopFlag = 1;

//Words to play the game. A random word from this list will get selected and showed to user
wordArrayList = ["Cat","Sun","Cup","Ghost","Flower","Pie","Cow","Banana","Snowflake","Bug","Book","Jar","Snake","Light","Tree","Lips","Apple","Slide","Socks","Smile","Swing","Coat","Shoe","Water",
"Heart","Hat","Ocean","Kite","Dog","Mouth","Milk","Duck","Eyes","Skateboard","Bird","Boy","Apple","Person","Girl","Mouse","Ball","House","Star","Nose","Bed","Whale","Jacket","Shirt","Hippo",
"Beach","Egg","Face","Cookie","Cheese","Ice Cream","Drum","Circle","Spoon","Worm","Spider Web"]


// This function is used to pick a random word from wordArrayListd[].
function showWords() {
    randomNumber = Math.floor(Math.random() * wordArrayList.length); // function to generate random number
    setCorrectPassDisplay("inline")
    document.getElementById("wordToDisplay").innerHTML = wordArrayList[randomNumber];
}


/*
This function gets called when user clicks play/pause button.
Based on the button clicked, function decides whether play/resume or pause the game.
*/
function startTheGame(){

  if (play_or_pause == "pause"){
    clearTimeout(time);                               // Clear the timer
    totalTimeRun = new Date().getTime() - startTime;  // Calculate how long the game is running
    complete = totalTimeRun >= countdown;

    setParameters("img/play-button.png", "resume", 0, 0);
    stopFlag = 1;

  }else if(play_or_pause == "resume"){
    setParameters("img/pause-button.png", "pause", 1, 1);
    startTime = new Date().getTime();

    countdown = countdown - totalTimeRun;           // Substarct time the program ran from the total time
    time = setTimeout(gameResult,countdown);        // Set the new timer with new time value
    stopFlag = 1;

  }else if(play_or_pause == "play"){
    document.getElementById('listOfWordsDisplayed').style.display = 'none';
    resetSection();

    setParameters("img/pause-button.png", "pause", 1, 1);
    startTime = new Date().getTime();

    time = setTimeout(gameResult,countdown);        // Set the new timer with initial time value
    counterTime = setInterval(displayCounter,1000); // Set the counter to show remianing seconds

    showWords();
    setCorrectPassDisplay("inline");
    stopFlag = 1;
  }
}

// This function gets called when user clicks the Stop button
function stopTheGame(){
  if (stopFlag == 1){                               //Checking whether user is stopping the running game.
    clearTimeout(time);
    gameResult();
    stopFlag = 0;                                   //Setting stop flag to 0 to indicate that user has
                                                    //stoped the game.
  }
}

// This function gets called when game is over or user clicks the Stop button
function gameResult(){
  var resultText = "Your Score is " + result;
  document.getElementById("wordToDisplay").innerHTML = resultText;
  resetTheVariables();

  displayShowedWords();
}

/*
This function is used to display the countdown to user.
"counterTime" timer calls this function every second
*/
function displayCounter(){
  /*
    Based on countDigit(0 or 1) the counter values is displayed.
    Value of countDigit is 0 when game is paused and 1 when game is resumed
  */
  counter = counter - countDigit;
  document.getElementById("countDown").innerHTML = counter;
}

/*
  This function gets called when used clicks the Pass button.
  It shows the next word by calling showWords().
*/
function nextWord(){
  if (resume_or_play == 1){
    passOrCorrect = "pass"
    addWordToList(wordArrayList[randomNumber],"black");    // It marks the word in black.
    showWords();
  }
}

/*
  This function gets called when used clicks the Correct button.
  It shows the next word by calling showWords().
  It will increase the result variable value by 1.
*/
function correctGuess(){
  if (resume_or_play == 1){
    passOrCorrect = "correct"
    addWordToList(wordArrayList[randomNumber],"#0066cc");  // It marks the word in blue shade.
    result = result + 1;
    showWords();
  }
}

// This function is to make List of words showen to user section visible.
// gameResult() calls this function to display list of words to user.
function displayShowedWords(){
  document.getElementById('listOfWordsDisplayed').style.display = 'inline';
}

// This function is used to add list element to <ul>
function addWordToList(word,color){
  var li=document.createElement('li');

  // If the user clicks pass then mark work in italic and strick through it.
  if ( passOrCorrect == "pass" ){
    li.style.fontStyle = "italic";
    li.style.textDecoration = "line-through";
  }

  li.style.color = color;
  ul.appendChild(li);
  li.innerHTML= word;
}

// This function is to reset all the variables to initial values so that user can retart the game.
function resetTheVariables(){
  document.getElementById("countDown").innerHTML = "";
  document.getElementById('playOrPause').src = 'img/play-button.png';
  setCorrectPassDisplay("none")

  clearTimeout(counterTime);

  result = 0;
  totalTimeRun = 0
  countdown = 0.5*60*1000;
  resume_or_play = 0;
  play_or_pause = "play";
  counter = 0.5*60;
  countDigit = 1;
  passOrCorrect = "correct";
}

// This function is to set the display style of Pass and Correct buttons.
function setCorrectPassDisplay(displayStyle){
  document.getElementById('correct').style.display = displayStyle;
  document.getElementById('pass').style.display = displayStyle;
}

/*
  This function is called when user decides to start the new game.
  Function will delete the section with list and then will craete a blank section,
  which can be used to add list elements.
*/
function resetSection(){
  // Delete the existing section with all elements in it.
  var element = document.getElementById("listOfWordsDisplayedList");
  element.parentNode.removeChild(element);

  // Create the new section
  listSection=document.getElementById('listOfWordsDisplayed');
  var section=document.createElement('section');
  section.id = "listOfWordsDisplayedList"
  listSection.appendChild(section);

  /*
    Create ul element and append it to section.
    This ul element is further used to add list element
  */
  listSection=document.getElementById('listOfWordsDisplayedList');
  ul=document.createElement('ul');
  listSection.appendChild(ul);
}

// This function is used to set parameters
function setParameters(buttonImage, playPauseStatus, playResumeStatus, countValue){
  document.getElementById('playOrPause').src = buttonImage;
  play_or_pause = playPauseStatus;
  resume_or_play = playResumeStatus;
  countDigit = countValue;
}
