# lets-collect-books
## This app creates website that allows a user to create an accout, log on then search for books by keyword (google api) and save them to a locally stored list. Books can also be deleted.

## Table of Contents
* [Installation](#installation)
* [Deployed Link](#deployed)
* [Usage](#usage)
* [Images](#images)
* [Contributions](#contributions)
* [Software](#software)
* [Questions](#questions)

## Installation
No installation is necessary - working app is live and deployed on Heroku. If user would like to work with the code locally, npm install in the command line should install all the dependencies as found in the package.jason file. App will automatically start up when npm run develop is typed into the command line.

## Deployed 
https://jcs-lets-collect-books.herokuapp.com/


## Usage
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Images 
![Home Page](https://github.com/Jsumme1/lets-collect-books/blob/main//client/public/HomePage.JPG)
![Example Book Search](https://github.com/Jsumme1/lets-collect-books/blob/main/client/public/CatsSearch.JPG)
![Saved Books](https://github.com/Jsumme1/lets-collect-books/blob/main/client/public/SavedBooks.JPG)


## Contributions
Made by Julie Summers

## Software
This app was created using javaScript, jsNode, express (and its various children), Apollo Express, React, Graphql, Bcrypt, HTML, CSS. Heroku and MONGOdb used for deployment. 


## Questions 
* If you have any questions about the repo, open an issue or contact me directly at <julie.summers2000@gmail.com>.
* You can find more of my work at [https://github.com/Jsumme1](https://github.com/Jsumme1)
