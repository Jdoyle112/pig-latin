var pigla = "ay";
var user_word;
var output;


$(document).ready(function(){
	$('#myForm').on("click", function(){
		translate();
	});

	function translate(){
		user_word = $('#text').val();
		step1 = user_word.charAt(0);
		output = user_word.substr(1) + step1 + pigla;
		$('#result').html(output);
	};
});



