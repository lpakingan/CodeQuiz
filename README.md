# Bootcamp Challenge #4: Code Quiz

## Summary of the Challenge

In this week's challenge, we were tasked with building a timed coding quiz with multiple choice questions. In order to create the quiz, we needed to use dynamically updated HTML and CSS elements that were powered by JavaScript. 

## Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Strategy

### HTML
There were three main components of this week's challenge: HTML, CSS and JavaScript. The first step of starting the project was deconstructing the quiz's various interfaces. These could be divided into 4 main sections:

1. A start screen that is initialized when the quiz webpage is opened and includes a button to begin the quiz
2. A quiz screen that has dynamically updated questions/answers, scoring, timing, and answer feedback
3. An end screen where the user is prompted to submit their quiz score
4. The highscores page where the user can view their locally stored highscores

The HTML file was split into sections pertaining to each of the different screens of the quiz. This allowed for easy retrieval of elements pertaining to each screen as well as simple manipulation of JavaScript elements in switching the screens when needed.

### JavaScript
Arguably, the JavaScript elements were the most crucial to this project, as it allowed the quiz elements to run and update dynamically. Using JavaScript allowed for the ability to tap into the HTML elements to change text as well as add functionality to the buttons, which made the quiz responsiveness possible. Multiple functions were utilized in order to add functionality to the quiz, such as to switch between screens, show the questions/answers in a random order, store highscores and retrieve them for viewing and dynamically update the highscores list, to name a few. 

Adding EventListeners to the clickable elements of the HTML document was prioritized. This allowed for the clicking around to different screens, which was critical for making the quiz run as expected. A full description of all functionalities of the functions and EventListeneres that were added can be found in the script.js file.

#### **Taking the Quiz**
The quiz begins once the Start Quiz button is pressed. The user has 60 seconds to answer the 5 questions that are presented. If the user answers correctly, 20 points are added to their score. If they answer incorrectly, 10 seconds are deducted from the quiz timer and they receive feedback on what the correct answer is. 

![](https://github.com/lpakingan/challenge-4-code-quiz/blob/main/assets/README%20demos/quiz_demo.gif)

#### **Submitting Highscores**
Once the quiz concludes (either by answering all 5 questions or running out of time), the user is prompted to add their highscore by entering their name. The user can choose not to and return to the start screen by pressing Go Back, or enter their name and press Submit Score to submit their score to the highscores list.

If the user enters an empty name, they will be prompted to try again. The Submit Score button disappears once a valid name is entered and signals a sucessful submission.

![](https://github.com/lpakingan/challenge-4-code-quiz/blob/main/assets/README%20demos/submission_demo.gif)

#### **Viewing Highscores**
Users can view their locally stored highscores when View Highscores is clicked. Any prior scores that were submitted will be showcased on the highscores screen. If the user would like to clear their highscores, they can press the Clear Highscores button.

![](https://github.com/lpakingan/challenge-4-code-quiz/blob/main/assets/README%20demos/highscore_demo.gif)

### CSS
To make the user interface look presentable, CSS styling was used to help format the webpage.

## Resources Used
- W3Schools
- MDN Web Docs
- Stack Overflow
- GIPHY (for the quiz background)

## Deployed Application
The final deployed webpage can be found [here](https://lpakingan.github.io/challenge-4-code-quiz/).
