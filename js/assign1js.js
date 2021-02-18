// Author: Darren Heynsbergen-Lediard
// Sheridan Student ID: 991609497
var userName = prompt("Please enter your name");
var num1 = prompt("Please enter the first number");
num1 = parseInt(num1);

var num2 = prompt("Please enter the second number");
num2 = parseInt(num2);

var num3 = prompt("Please enter the third number");
num3 = parseInt(num3);


function printResult()
{
    var average = (num1 + num2 + num3)/3;
    // document.getElementById("result").innerHTML= userName + "<br>Your average is:" + average;

    if (average >= 90)
    {
        document.getElementById("result").innerHTML= userName + "<br>Your average is: " + average + " Awesome";
    }
    else if ((average < 90) && (average >= 80))
    {
        document.getElementById("result").innerHTML= userName + "<br>Your average is: " + average + " Very Good";
    }
    else if ((average < 80) && (average >= 50))
    {
        document.getElementById("result").innerHTML= userName + "<br>Your average is: " + average + " OK";
    }
    else
    {
         document.getElementById("result").innerHTML= userName + "<br>Your average is: " + average + " Fail";
    }
}

function printChristmas()
{
  document.getElementById("myImg").src = "images/christmas.jpg";
  document.getElementById("myImg").width = 200;
  document.getElementById("myImg").height = 200;
  document.getElementById("holiday").innerHTML = "Source:https://www.gettyimages.ca/detail/photo/homemade-hot-chocolate-mug-and-gingerbread-cookies-royalty-free-image/1170759441<br><br>\
  Christmas (or the Feast of the Nativity) is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration \
  among billions of people around the world. A feast central to the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season of\
   Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night.\
   (https://en.wikipedia.org/wiki/Christmas)";
}

function printHalloween()
{
  document.getElementById("myImg").src = "images/halloween.jpg";
  document.getElementById("myImg").width = 200;
  document.getElementById("myImg").height = 200;
  document.getElementById("holiday").innerHTML = "Source:https://www.gettyimages.ca/detail/photo/halloween-jack-o-lantern-pumpkins-on-rustic-wooden-royalty-free-image/1175106211<br><br>\
  Halloween or Hallowe'en (a contraction of 'All Hallows evening'), also known as Allhalloween, All Hallows' Eve, or All Saints' Eve, is a celebration observed in many countries on 31 October,\
   the eve of the Western Christian feast of All Hallows' Day. It begins the observance of Allhallowtide, the time in the liturgical year dedicated to remembering the dead, including saints (hallows), martyrs, and all the faithful departed.\
   (https://en.wikipedia.org/wiki/Halloween)";
}

function printNewYears()
{
  document.getElementById("myImg").src = "images/newYears.jpg";
  document.getElementById("myImg").width = 200;
  document.getElementById("myImg").height = 200;
  document.getElementById("holiday").innerHTML = "Source:https://www.gettyimages.ca/detail/photo/new-year-celebration-with-champagne-royalty-free-image/1057437600<br><br>\
  New Year is the time or day at which a new calendar year begins and the calendar's year count increments by one. Many cultures celebrate the event in some manner.\
  (https://en.wikipedia.org/wiki/New_Year)";
}
