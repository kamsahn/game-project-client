# A single-page web application of tic tac toe

Project 1 for General Assembly's web development immersive course. The prompt was
to create a tic tac toe SPA (single-page application).

## Technologies used:

Javascript - jQuery, AJAX

HTML - Bootstrap

CSS - SCSS

## Strategy:

### Step 1: Planning

Given the project requirements, my first task was to create a checklist of all action items. Essentially anything that was going to be checked at the end of the project was added to the list. After reviewing this list, I reviewed similar works (using jQuery and AJAX for crud and authentication). Finally, I reviewed the assignment documentation for information on the given API and how to interact with it.

### Step 2: User stories and wireframes

After reviewing the given material, I had a vague idea of what I wanted my end product to look like. I created and/or polished existing wireframes (links below) to give myself a visual template to try to represent. I then created user stories (listed below) to make sure I added specific functionallity that users would want. These stories would eventually serve as my "tickets" when touching up my final product.

Wireframes:

[Wireframe overview](http://i.imgur.com/ryZa4hE.jpg)

[individual wireframes part 1](http://i.imgur.com/cAYQRD2.jpg)

[individual wireframes part 2](http://i.imgur.com/fBWHBmo.jpg)

User stories:

1. As a competitive player, I want to see my won/lost matches to I can compare with my friends.
2. As an individualist, I want to be able to have a private sign in so I can train on my own.
3. As a socialite, I want to multi-player functionality so I can play with my friends.
4. As a designer, I want a game board that is pleasing to the eye so it is easy to use.
5. As a man who makes many mistakes, I want an undo-move incase I make a blunder
6. As a user I would like to know whose turn it is
7. As a user I would like to play a fully functioning game.
8. As a new user, I would like to have the rules displayed on set up
9. As a user, I would like the game to function properly
10. As a user, I would like the app to give me only meaningful UI

### Step 3: Implementation

Following the suggested schedule, I first created a basic game board that a user could populate with X's and O's, largely with html and Bootstrap. I then wrote the game engine with Javascript that would switch between players X and O as well as check for the game end conditions. After this, I wrote my jQuery/AJAX requests to the given API so that users could sign in and save individual game instances that could be viewed later. I wrote out user feedback messages and triggers and touched up the gameboard with another round of bootstrap and css/scss. I then tested, found some bugs and fixed them. With some extra time, I made and tested an undo button for my gameboard.

## Unsolved Issues:

Given more time on this project, I would add the following features to my app:
1. [ ] Dual sign in
1. [ ] Multi-device game support
1. [ ] prevent simultaneous sign in issues
1. [ ] Additional media queries to account for more sizes
1. [x] AI player mode
