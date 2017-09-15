# Charades
Charades is a game. You have to "act out" a phrase/word without speaking, while one member of your team try to guess what the phrase/word is.

## Prerequisites

- Web browser which supports javascript
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

This game requires minimun 2 people to play. One person will guess the word and rest of the team will act.
Each player will have 60 seconds to play the game.

1. Click on *Play* button to start the game. A word will be displayed in the box.
2. Explain the word through gestures.
3. If a player guessed the word then click *Thumbs-up* button on your right.
4. If a player could not guess and wishes to pass then click *Thumbs-down* button on your left.
5. Once you click *Thumbs-up* or *Thumbs-down* button, next word will be displayed. Again follow the Step 2 until the timer is up.
6. Once you start the game a *Play* button will turn into *Pause* button. If you want to pause the game, click the *Pause* button.
7. If you wish to end the game before the timer is up, click the *Stop* button.
8. Once the game is over, the player's score along with the list of words displayed, will be shown.

After all members played the game, tally the score. The one who has guessed maximum words will win the game.


## Improvements
 Currently the wordList.xml has 60 words in it. You can add new words or phrases to this file.
 Insert below code to your wordList.xml file to add new words or phrases.
 
Add below xml tag to <simpleWords> parent.
 ```
<word> word or phrase of your choice </word>
 ```
