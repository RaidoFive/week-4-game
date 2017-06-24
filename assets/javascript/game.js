// Week-4-game, Crystal game Javascript
var	crystalVal = 0;
var goalVal = 0;
var wins = 0;
var losses = 0;
var images;
var imageButton;
var btn1;
var btn2;
var btn3;
var btn4;

var arr = [btn1, btn2, btn3, btn4];

$(document).ready(function() {
//creating function to run my code, creating values and binding them to elements.
	var initializeRandoms = function() {
//creating random number between 19 and 120, tied to Goal.  This is the number players want to tie.
		goalVal = Math.floor((Math.random() * 102) +19);
		$("#goal").text(goalVal);
//creating random number between 1 and 12 for buttons
		btn1 = Math.floor((Math.random() * 12) + 1);
		btn2 = Math.floor((Math.random() * 12) + 1);
		btn3 = Math.floor((Math.random() * 12) + 1);
		btn4 = Math.floor((Math.random() * 12) + 1);
		console.log(btn1, btn2, btn3, btn4);
	}
//making buttons out of images
	var makeBtns = function() {
		$("#btn1, #btn2, #btn3, #btn4").click(function() {
  		$("#btn1").html(btn1);
  		$("#btn2").html(btn2);
  		$("#btn3").html(btn3);
  		$("#btn4").html(btn4);
  		console.log(btn1);
  		console.log(btn2);
  	});
	}
//send value of wins, losses, crystals to HTML, resolve the game.
	var Val = function() {	
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#crystalScore").html(crystalVal);
		$("#btn1, #btn2, #btn3, #btn4").click(function() {
			if ($(this).attr("id") === "btn1") {
	   			crystalVal += Number(btn1);
	   		}
	   		if ($(this).attr("id") === "btn2") {
	   			crystalVal += Number(btn2);
	   		}
	   		if ($(this).attr("id") === "btn3") {
	   			crystalVal += Number(btn3);
	   		}
	   		if ($(this).attr("id") === "btn4") {
	   			crystalVal += Number(btn4);
	   		}

	    	$("#crystalScore").text(crystalVal);  

//finish win condition, loss condition, reset goalVal, crystalVal, crystals get new numbers.
			if (crystalVal >= goalVal) {
				if (crystalVal === goalVal) {
					wins++;	
					$("#wins").text(wins);	
					crystalVal = 0;				
					initializeRandoms();
				} else {
					losses++;
					$("#losses").text(losses);
					crystalVal = 0;
					initializeRandoms();
				}
			}

		});
	}	
		



//make code to send value of buttons to crystal score on click
	initializeRandoms();
	makeBtns();
	Val();
});	
