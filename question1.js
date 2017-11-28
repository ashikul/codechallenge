$(document).ready(function () {

	$('#get-letters-button').click(function () {

		var input = $('#input-question-one').val();

		var output = get_letters(input);

		$('#output').text(output);

	});


	function get_letters(sentence) {

		var sentenceCharArray = sentence.toLowerCase().split('');

		var uniqueSentenceCharArray = sentenceCharArray.filter(function (char, i, array) {
			return array.indexOf(char) === i;
		});

		return uniqueSentenceCharArray.sort().join('');

	}



});
