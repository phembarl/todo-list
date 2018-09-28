//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click On X TO Delete Todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(function(){
		$(this).remove;
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
		
	};
});

$(".fa-pencil-alt").on("click", function(){
	$("input[type='text']").fadeToggle();
})