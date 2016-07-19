var censoredWords = ['wpp','zjj','pz'];
var customCensoredWords = [];

function censor(str){
	for(index in censoredWords){
		str = str.replace(censoredWords[index], '***');
	}
	for(index in customCensoredWords){
		str = str.replace(customCensoredWords[index], '***');
	}
}

function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredWords() {
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;