var hint_state = 0;
var nomor_soal = 0;
var buka_oo_text = 'Mau membahas soal ini? Cek <a href="#">olimpiade.org</a>!';
var katex_props = { delimiters: [
	{left: "$", right: "$", display: false},
	{left: "$$", right: "$$", display: true},
	{left: "\\[", right: "\\]", display: true},
	{left: "\\(", right: "\\)", display: false}
] };

$(document).ready(function() {
	var p = $('main > p');

	p.slideUp();
	for (var i = 8; i > 0; i--) {
		$('section').prepend('<button class="btn btn-lg btn-default" ' + 
				'id="' + i + '">' + i + '</button>');
	}

	$('#buttons *:not(#next-hint)').click(clear_everything);
	$('#buttons').on('click', 'button#1', function() {
		hint_state = 1;
		nomor_soal = 1;
		var soal_selector = $('#soal');
		var hint1_selector = $('#hint-1');
		soal_selector.text(soal[0].soal);
		hint1_selector.text("Hint: " + soal[0].hint_1);
		soal_selector.slideDown();
		hint1_selector.slideDown();
		for (var i = 0; i < p.length; i++) {
			if (i > 0) {
				$('#hint-' + i).text("Hint: " +
						soal[nomor_soal - 1]["hint_" + i]);
			}
			renderMathInElement(p.get(i), katex_props);
		}
	});

	$('#next-hint').click(function() {
		if (hint_state < 3) {
			hint_state++;
			$('#hint-' + hint_state).slideDown();

			if (hint_state === 3) {
				$('#buka-oo').empty();
				$('#buka-oo').append(buka_oo_text);
				$('#buka-oo').slideDown();
			}
		}
	});
});

function clear_everything() {
	$('main > p:not(#soal):not(#hint-1)').slideUp();
}

var soal = [{
	soal: "Diberikan bahwa $a = 2^b$ dan $b = 3$. Cari nilai $3^a$.",
	hint_1: "Cari nilai $a$.",
	hint_2: "Cari nilai $3^a$.",
	hint_3: "Dapet deh hasilnya"
}];
