# Music Quiz



## Main Purpose

The main purpose of this quiz is to engage musically interested persons in a different, more challenging quiz than the majority of musical quiz's available at the moment. 
It's meant for having a good time and at the same time educate the user about a wide range of musical information that varies in difficulty. The user interface is designed to make it easy for the user to start the quiz without instructions or further information about the topic.

The quiz has three layouts: Start, Quiz and Restart/Valuation

The site has been created as a milestone project for the Code Institute's Diploma in Full Stack Software Development program.

Required technologies are: HTML5, CSS3 and JavaScript

* A live version of the website can be found here: https://jona-tech.github.io/musicians-quiz/

* The repository can be found here: https://github.com/jona-tech/musicians-quiz

## Table of content


* [Target Audience](#target-audience)
* [User stories](#user-stories)
* [Design](#design)
* [Features](#features)
* [Technologies-Used](#technologies-used)


## UX
<hr>

### Target Audience

* The quiz targets any individual wanting to have a fun time and possibly learn something interesting along the way. Everyone can take the quiz but you need to posess a wide range of musical knowledge to score high on the first try.

### User stories

#### New Users
* I want a quiz that is more than just guessing songs.
* I want to improve my knowledge about music.
* I want to challange myself in musical knowledge.
* I want to score 10 out of 10.

#### Experienced Users
* I want to improve my score.
* I want to know more about this topic.

#### Goal
* I want to score the highest possible.

#### Requirements
* To build an interactive front-end site that responds to user actions. The user should engage actively by altering data and how the site displays. The development process needs to be well documented through a version controls system such as GitHub and contain HTML5, CSS3 and JavaScript.

### Design
The design is simple to keep the user focused on the quiz without unnecessary distractions. 

![Quiz-design](https://i.imgur.com/49IxgOz.png)

When clicking an answer, all the wrong answers turns grey and the correct answer(s) turns green.

![Answer-clicked](https://i.imgur.com/zR2pHtG.png)

In the ending, the user also receives a valuation based on the performance in score.

Performance ratings:

Excellent 
![Excellent](https://i.imgur.com/4NjIXWY.png)

Good
![Good](https://i.imgur.com/1nlr3Rm.png)

Bad
![Bad](https://i.imgur.com/R98svVE.png)

#### Typography
* I used google fonts 'Handlee' font to increase the sensation of playfulness to the website.
* I used Sans-serif as a backup for users that may have browsers not supporting google fonts.

#### Color Palette
* There are only two colors on the palette, chosen from personal preference to make a simple look and make text readable without unnecessary distractions.
* The background is gradient going left to right, grey to black to make the design more interesing.

#### Different screens
* The website is fully responsive to fit all screen sizes.

#### Images
* The image on top of this README.md file is created by https://ui.dev/amiresponsive.

### Features

#### Structure

The website consists of two different layouts.
* Start/Restart is the same layout with different text in the button element depending on whether to Start a new quiz, or restart the quiz after finishing.

![Start-Button](https://i.imgur.com/U3NNg4e.png)

* Quiz layout shows a question box with 4 different options to choose from.

![Question-Box](https://i.imgur.com/NGZf241.png)

#### Future development

* A possible future implementation is different levels of difficulty, ranging from easy to hard and covers a wide range of questions for musicians.

### Technologies used

#### Languages 

* HTML5, validated through w3c validator with no error messages

![HTML-Valid](https://i.imgur.com/oUf6rvu.png)

* CSS3, validated through jigsaw validator with no error messages

<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

* JavaScript validation through JShint show only one error that does not affect my code.

![JShint-validtor](https://i.imgur.com/xVQzrmH.png)

#### Deployment

<ol>
<li>Sign In to Github</li>
<li>Go to "my repositories"</li>
<li>Choose the "Musicians-quiz" project</li>
<li>Go to settings</li>
<li>Go to Github pages</li>
<li>Choose deployment from root directory of the file</li>
<li>Save file</li>
<li>The website is now live</li>
</ol>

#### Content

* Questions and answers were known by heart.

#### Media

* Google fonts.


### bugs
<ul>
<li><em>Bug 1</em></li>
<ul>
<li>Error: cannot read properties of undefined forEach line 26.</li>
<li>Fix: spell "answer" instead of "answers" in questions array</li>
</ul>
<li>Bug 2</li>
<ul>
<li>Error: Question container turns grey and dysfunctional after all questions are finished.</li>
<li>Fix: Add restart button to restart quiz at the end.</li>
</ul>
<li>Bug 3</li>
<ul>
<li>Score incrementation continues from current integer after clicking restart button even though it should start over at 0.</li>
<li>Fix: change value of the scoreboard when pressing the restart button in the script.js file</li>
</ul>
</ul>

### Credits

* web dev simplified
* W3Schools
* Stack overflow

 