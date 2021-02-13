


const words = [ "string iKnow = \"C#\";", 
                "i_know = \"Python\"", 
                "var iKnow = \"JavaScript\";",
                "I know HTML5 and CSS3 as you can see :)"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			setTimeout(deletingEffect, 2000);
			return false;
		};
		timer = setTimeout(loopTyping, 30);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 30);
	};
	loopDeleting();
};