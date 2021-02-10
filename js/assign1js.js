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
  document.getElementById("holiday").innerHTML = "This is Christmas";
}

function printHalloween()
{
  document.getElementById("holiday").innerHTML = "This is Halloween";
}

function printCNewYears()
{
  document.getElementById("holiday").innerHTML = "This is New Years";
}
