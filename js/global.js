$(document).ready(function(){
	 $("#terms").click(function(){
	 	if($(this).prop("checked") && $('#news').length==0){
			$("#conditions").append('<input type="checkbox" id="news"> I would like to receive the upcoming news about Twist Image');
	 	}
	});
});

function emptyText(){
	var textbox = $.trim($('#uname').val())
	if (textbox == ""){
		alert("Please enter your name.");
	}
}