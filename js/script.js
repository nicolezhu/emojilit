var Submission = Parse.Object.extend("Submission");

function saveSubmission() {
	var newSubmission = new Submission();
	newSubmission.save({
		title: $('#title').val(),
 		author: $('#author').val(),
  		summary: $('#summary').val()
	}, {
  		success: function(newSubmission) {
	    	// The object was saved successfully.
	    	alert("success" + newSubmission.id);
	 	},
		 error: function(newSubmission, error) {
		    // The save failed.
		    // error is a Parse.Error with an error code and message.
		    alert("failure" + error);
		}
	});
}

function retrieveSubmissions() {
	var query = new Parse.Query(Submission);
	query.find({
		success: function(results) {
			for (var i = 0; i < results.length; i++) {
				console.log(results[i].attributes);
				$('.submissions').append('<p>' + results[i].attributes.title + '</p><p>' + results[i].attributes.author + '</p><p>' + results[i].attributes.summary + '</p>');

				if (i == (results.length - 1)) {
					loadEmoji();
				}
			};
		},
		error: function(query, error) {
			alert('error');
		}
	});
	console.log(query);
}

function loadEmoji() {
	$.getScript('js/emoji.min.js', function() {
		console.log('emoji loaded');
	});
}

$(document).ready(function() {
	
	//retrieveSubmissions();
	$('#submit').on('click', saveSubmission);
});