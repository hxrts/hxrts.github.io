$(document).ready(function(){

	$.ajax({
		url: 'https://api.github.com/repos/hxrts/hxrts.github.io/commits',
		type: 'GET',
		dataType: 'json',
		success: function(result) {
			commits = $.each(result, function(index, element) {});
			date = commits[0]["commit"]["committer"]["date"];
			formatdate = moment(date).format('MM.DD.YY');
			document.getElementById("date").value = "updated " + formatdate;
		},
		error: function() { console.log("error"); },
	});

});

