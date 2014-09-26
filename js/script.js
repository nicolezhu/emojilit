function saveSubmission() {
	var Submission = Parse.Object.extend("Submission");
    var newSubmission = new Submission();
    newSubmission.set("title", $('#title').val());

    newSubmission.save(null, {
    	success: function(newSubmission) {
    		alert('success');
    	},
    	error: function(newSubmission, error) {
    		alert('failed' + error.message);
    	}
    });
}

$(document).ready(function() {
	Parse.initialize("EZIUjGYVtDlR4AQn9K4Pwut7vecs8QXeiKQ35ddN", "M2q3CiIGfvcOWlkowa3U2oeP5UFTMVaACh1xMcEI");

	$('#submit').on('click', saveSubmission);
});