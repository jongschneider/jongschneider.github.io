function init() {
	var button = document.getElementById('quote-button');
	button.onclick = arnoldQuote;
}

//quote objects
var quotes = [
	[' "I\'ll be back."', 'The Terminator'],
	[
		'"Have you ever killed anyone?" "Yes, but they were all bad!" ',
		'True Lies'
	],
	['"Are you Sarah Conner?"', 'Terminator'],
	[
		'"I live to see you eat that contract! But I hope you leave enough room for my fist, because I\'m going to ram it into your stomach and break your goddamn spine!"',
		'The Running Man'
	],
	[' "See you at the party, Richter!"', 'Total Recall'],
	['"You are one ugly motherfucker."', 'Predator'],
	['"Hasta la vista, baby."', 'Terminator 2: Judgement Day'],
	[
		'"Remember, Sully, when I promised to kill you last?" "That\'s right, Matrix! You did!" "I LIED!"',
		'Commando'
	],
	[' "Fuck you, asshole."', 'The Terminator'],
	[' "Get your ass to Mars."', 'Total Recall']
];

function arnoldQuote() {
	var random = Math.floor(Math.random() * quotes.length);
	var value = quotes[random][0];
	var movieValue = quotes[random][1];

	var element = document.getElementById('quote');
	element.innerHTML = value;
	var element = document.getElementById('author');
	element.innerHTML = movieValue;
}
window.onload = init;
