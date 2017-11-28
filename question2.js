$(document).ready(function () {

	var itemsStart = 0;
	var itemsEnd = 0;
	var itemsDataStore = {};

	$('#users-search-button').click(function () {

		var input = $('#input-question-two').val();

		$.ajax({
			type: "GET",
			url: "https://api.github.com/search/users?q=" + input,
			dataType: "json",
			success: function (response) {

				if (response.total_count === 0) {
					alert('0 items to show!');
					return;
				}

				itemsStart = 1;
				itemsEnd = 5;
				itemsDataStore = response.items;

				createChartFromItems(itemsStart, itemsEnd, itemsDataStore);

				$('#next-button').show();
				$('#chart').show();

			}
		});
	});

	$('#next-button').click(function (e) {

		itemsStart += 5;
		itemsEnd += 5;

		if (itemsStart > itemsDataStore.length || itemsEnd > itemsDataStore.length) {
			alert('No more results to show!');
			$('#next-button').hide();
			$('#chart').hide();
			return;
		} else {
			createChartFromItems(itemsStart, itemsEnd, itemsDataStore);

		}

	});

	function createChartFromItems(start, end, dataStore) {
		createChart(getCharFrequencyFromList(getAllCharFromItemRange(itemsStart, itemsEnd, itemsDataStore)));
	}

	//TODO: D3.JS implementation not complete
	function createChart(letterFrequency) {

		$('#chart').text(JSON.stringify(letterFrequency));

	}

	function getAllCharFromItemRange(start, end, dataStore) {
		var allCharConcatenated = '';

		if (end > dataStore.length) {
			end = dataStore.length;
		}

		for (var i = start; i < end; i++) {
			allCharConcatenated += dataStore[i].login.toLowerCase();
		}
		return allCharConcatenated;
	}

	function getCharFrequencyFromList(concatenatedLoginString) {
		var letterFrequency = {
			a: 0,
			b: 0,
			c: 0,
			d: 0,
			e: 0,
			f: 0,
			g: 0,
			h: 0,
			i: 0,
			k: 0,
			j: 0,
			l: 0,
			m: 0,
			n: 0,
			o: 0,
			p: 0,
			q: 0,
			r: 0,
			s: 0,
			t: 0,
			u: 0,
			v: 0,
			w: 0,
			x: 0,
			z: 0,
			other: 0
		};

		var key;
		for (var i = 0; i < concatenatedLoginString.length; i++) {
			key = concatenatedLoginString[i];
			if (key in letterFrequency) {
				letterFrequency[key] += 1;
			} else {
				letterFrequency['other'] += 1;
			}
		}

		return letterFrequency;
	}


});
