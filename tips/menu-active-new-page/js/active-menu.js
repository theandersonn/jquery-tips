$(function(){
	var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);

	$(".menu-box > li > a").each(function(){
	    if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
	    	$(this).parent().addClass("menu-active");
	});
});