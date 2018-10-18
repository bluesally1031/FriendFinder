////////////////////////
//
//  Dependencies
//
////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

////////////////////////
//
//  Setup Express App
//
////////////////////////
var app = express();
var PORT = process.env.PORT || 8080;

////////////////////////
//
//  Setup Express App for data parsing
//
////////////////////////
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

////////////////////////
//
// Create array containing data
//
////////////////////////
// 10 survey questions
var questions = []

////////////////////////
//
//
//
////////////////////////

// COME BACK Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.


// Determine the user's most compatible friend using the following as a guide:
function getBestFriend () {

    // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

    // The closest match will be the user with the least amount of difference.
}

function getFriendScore () {
    // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
    // Total Difference: 2 + 1 + 2 = 5
    // Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
}

function showBestFriend () {
    // The modal should display both the name and picture of the closest match.

}

