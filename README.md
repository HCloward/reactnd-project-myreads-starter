# MyReads Project

This is my final assessment project for Udacity's React Fundamentals course. The goal of this project was to use the provided template to save time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. 

# Project Overview
In the MyReads project, I created a bookshelf app that allows the user to select and categorize books she has read, is currently reading, or wants to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

# App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets the user select the shelf for that book. When users select a different shelf, the book moves there. Note that the default value for the control is always the current shelf the book is in.

The main page also has a link to /search, a search page that allows users to find books to add to their library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets users add the book to their library. 

The search page also has a link to / (the root URL), which leads back to the main page.

When users navigate back to the main page from the search page, they should instantly see all of the selections they made on the search page in their library.

# To launch the project:

* clone the repo from github
* you need npm to run the project, if you do not have it download it here: https://www.npmjs.com/get-npm 
* install all project dependencies with the `npm install` command in the terminal
* start the development server with the `npm start` command in the terminal
