# Charades
Charades is a game. You have to "act out" a phrase/word without speaking, while the other members of your team try to guess what the phrase/word is.

## Prerequisites

- Web browwer which supports javascript
- Minimum 2 person to play the game
  
## File List
1. index.html
2. styleSheet.css
3. jsScript.js
4. wordList.xml
4. README.md
5. img folder which has images
  
## How to run

1. Place index.html, styleSheet.css, jsScript.js, wordList.xml and img folder at one location.
2. Open index.html
3. It will open the game on webpage.

## How to play the game

You need minimun 2 persons to play this game. One person will guess the word and rest of the team will act.
Each player will have 60 seconds to play the game.

1. Click on Play button to start the game. A word will be displayed in the box.
2. Explain the word through gestures.
3. If a player guessed the word then click Thumbs-up button on your right.
4. If a player could not and wishes to pass then click Thumbs-down button on your left.
5. Once you click Thumbs-up or Thumbs-down button, next word will be displayed. Follow the Step 2.
6. Once you start the game a Play button will turn into Pause button. If you want to pause the game, click Pause button.
7. If you wish to end the game before the timer is up, click the Stop button.
8. Once the game is over you will see the players score and list of words displayed to the user.


## Improvements
 Currently the wordList.xml has 60 words in it. You can add new word or phrases to this file.
 you have to insert below code to your wordList.xml file.
 
Add below xml tag to <simpleWords> parent.
 ```
<word> word or phrase of your choice </word>
 ```
